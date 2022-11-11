import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationComponent } from '../../lib/configuration/configuration.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { ModelDefinition, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { ImageDelta } from 'src/app/models/v1/image/ImageDelta';
import { GeneralConstants } from 'src/app/constants/GeneralConstants';

@Component({
  selector: 'configuration-image',
  templateUrl: '../../lib/configuration/configuration.component.html'
})
export class ImageComponent extends ConfigurationComponent<ImageDelta, ImageDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(ImageDelta, ImageDelta, route);
    this.title = "Image";
    this.api = ApiConstants.IMAGE_API;
    this.editType = 'create';
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(1)
        .withMaxLength(50)
        .withRequired(true)
        .withDeltaOnly()
        .withPattern(GeneralConstants.IMAGE_NAME_REGEX)
        .withInstructions(GeneralConstants.IMAGE_NAME_INSTRUCTIONS)
        .build(),
      new StringAttributeDefinitionBuilder()
        .withTitle("URL")
        .withDeltaSelector("url")
        .withMinLength(1)
        .withMaxLength(2083)
        .withRequired(true)
        .withDeltaOnly()
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("Folder")
        .withRequired(true)
        .withDeltaOnly()
        .withItemsFromObservable(this.service.get(ApiConstants.IMAGE_FOLDER_API))
        .build()
    ]);
  }

  public loadItems() {}
}
