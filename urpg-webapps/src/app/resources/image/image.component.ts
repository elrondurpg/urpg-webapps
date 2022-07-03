import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageDelta } from 'src/app/models/image/ImageDelta';
import { ImageFolderService } from 'src/app/services/image/image-folder.service';
import { ImageService } from 'src/app/services/image/image.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'resources-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  names:string[] = [];
  delta:ImageDelta = new ImageDelta();
  editType = "create";
  folderNames:string[] = [];

  @ViewChild('messageBox', {static: false})
  messageBox:MessageComponent;

  constructor(
    private route: ActivatedRoute,
    private service:ImageService,
    private imageFolderService:ImageFolderService
  ) { }

  ngOnInit() {
    this.imageFolderService.findAllNames().subscribe(folderNames => this.folderNames = folderNames);
  }

  create() {
    this.editType = "create";
    this.delta = new ImageDelta();
  }
  save() {
    console.log(this.delta);
    this.service.create(this.delta).subscribe(
      model => this.showSuccessMessage(model),
      error => this.showErrorMessage(error)
    );
  }

  showSuccessMessage(model) {
    this.messageBox.clear();
    this.messageBox.showSuccess(`Image ${this.editType}d successfully!`);
    this.delta = new ImageDelta();
  }

  showErrorMessage(error) {
    this.messageBox.clear();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.messageBox.showErrorArray(`Image could not be ${this.editType}d.`, messages);
    }
    else {
      this.messageBox.showError(`Image could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

}
