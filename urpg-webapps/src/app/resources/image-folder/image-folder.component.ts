import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { ImageFolder } from 'src/app/models/image/ImageFolder';
import { ImageFolderDelta } from 'src/app/models/image/ImageFolderDelta';
import { ImageFolderService } from 'src/app/services/image/image-folder.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-image-folder',
  templateUrl: './image-folder.component.html',
  styleUrls: ['./image-folder.component.css']
})
export class ImageFolderComponent implements OnInit {
  names:string[] = [];
  model:ImageFolder = undefined;
  delta:ImageFolderDelta = new ImageFolderDelta();
  editType = "update";
  extensions = [ "png", "gif", "jpg" ];

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:ImageFolderService
  ) { }

  ngOnInit() {
    this.loadNames();
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.findByName(params['name']);
      }
    });
  }

  loadNames() {
    this.service.findAllNames().subscribe(names => this.names = names);
  }

  create() {
    this.editType = "create";
    this.delta = new ImageFolderDelta();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new ImageFolderDelta();
    this.service.findByName(name).subscribe(model => {
      this.model = plainToClass(ImageFolder, model);
    });
  }

  save() {
    console.log(this.delta);
    if (this.editType == "update") {
      this.service.update(this.model.dbid, this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error));
    }
    else if (this.editType == "create") {
      this.service.create(this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error)
      );
    }
  }

  showSuccessMessage(model) {
    this.loadNames();
    this.messageBox.clear();
    this.messageBox.showSuccess(`ImageFolder ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new ImageFolderDelta();
    this.model = plainToClass(ImageFolder, model);
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`ImageFolder could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`ImageFolder could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
