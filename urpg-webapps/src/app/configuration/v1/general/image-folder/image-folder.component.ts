import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';
import { ImageFolder } from 'src/app/models/v1/image/ImageFolder';
import { ImageFolderDelta } from 'src/app/models/v1/image/ImageFolderDelta';

@Component({
  selector: 'configuration-image-folder',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class ImageFolderComponent extends ConfigurationComponent<ImageFolder, ImageFolderDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(ImageFolder, ImageFolderDelta, route);
    this.title = "Image Folder";
    this.api = ApiConstants.IMAGE_FOLDER_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(25)
        .withRequired(true)
        .build(),
      new StringAttributeDefinitionBuilder()
        .withTitle("Description")
        .withMinLength(0)
        .withMaxLength(60)
        .withRequired(true)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("Extension")
        .withItems(["png", "gif", "jpg"])
        .withRequired(true)
        .build()
    ]);
  }
}
