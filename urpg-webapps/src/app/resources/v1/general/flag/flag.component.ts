import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceComponent } from '../../lib/resource/resource.component';
import { ApiConstants } from 'src/app/constants/ApiConstants';
import { BooleanAttributeDefinitionBuilder, ModelDefinition, SelectAttributeDefinitionBuilder, StringAttributeDefinitionBuilder } from 'zydeco-ts';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';
import { Flag } from 'src/app/models/v1/general/Flag';
import { FlagDelta } from 'src/app/models/v1/general/FlagDelta';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'resources-flag',
  templateUrl: '../../lib/resource/resource.component.html'
})
export class FlagComponent extends ResourceComponent<Flag, FlagDelta> implements OnInit {

  constructor(
    protected route:ActivatedRoute
  ) { 
    super(Flag, FlagDelta, route);
    this.title = "Flag";
    this.api = ApiConstants.FLAG_API;
  }
  
  userLoaded() {
    super.userLoaded();
    this.modelDefinition = new ModelDefinition([
      new StringAttributeDefinitionBuilder()
        .withTitle("Name")
        .withMinLength(3)
        .withMaxLength(30)
        .withRequired(true)
        .build(),
      new StringAttributeDefinitionBuilder()
        .withTitle("Description")
        .withMinLength(3)
        .withMaxLength(120)
        .build(),
      new SelectAttributeDefinitionBuilder()
        .withTitle("Type")
        .withItems(["BOOLEAN", "STRING"])
        .withRequired(true)
        .build()
    ]);
  }

  create(refresh:boolean = false) {
    this.modelDefinition.removeAttribute("Value");
    super.create(refresh);
  }

  load(param:any, refresh:boolean = false) {
    this.modelDefinition.removeAttribute("Value");
    this.itemInContext = true;
    this.editType = "update";
    this.delta    = new this.deltaType();
    this.service.get(this.api, param).subscribe(model => {
      this.model = plainToClass(this.modelType, model);
      this.delta.set("value", undefined);
      this.createValueAttribute(this.model);
      console.log(this.model);
    });
    if (refresh) {
      this.modelDefinition.attributes.forEach(attributeDefinition => attributeDefinition.refresh());
    }
  }

  override onChange(attribute:string) {
    if (attribute == "Type" && this.delta.type != null) {
      this.modelDefinition.removeAttribute("Value");
      this.createValueAttribute(this.delta);
    }
  }

  createValueAttribute(obj:UrpgObjectModel) {
    let type = obj.get("type");
    if (type == "BOOLEAN") {
      this.modelDefinition.attributes.push(
        new BooleanAttributeDefinitionBuilder()
          .withTitle("Value")
          .build()
      )
    }
    else {
      this.modelDefinition.attributes.push(
        new StringAttributeDefinitionBuilder()
          .withTitle("Value")
          .withMaxLength(60)
          .build()
      )
    }
  }
}
