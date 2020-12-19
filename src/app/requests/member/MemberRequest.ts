import { EarnedBadgeRequestPart } from './EarnedBadgeRequestPart';
import { LegendaryProgressRequestPart } from './LegendaryProgressRequestPart';
import { MemberRoleRequestPart } from './MemberRoleRequestPart';
import { OwnedItemRequestPart } from './OwnedItemRequestPart';

export class MemberRequest {
    discordId:string;
    username:string;
    money:number;
    wins:number;
    losses:number;
    draws:number;
    joinDate:Date;
    roles:MemberRoleRequestPart[];
    badges:EarnedBadgeRequestPart[];
    legendaryProgress:LegendaryProgressRequestPart[];
    items:OwnedItemRequestPart[];
}
/*{
        "badges": [
          {
            "date": "2020-12-14T20:35:38.315Z",
            "delete": true,
            "gymDbid": 0,
            "logUrl": "string"
          }
        ],
        "discordId": "string",
        "draws": 0,
        "items": [
          {
            "delete": true,
            "item": "string",
            "quantity": 0
          }
        ],
        "joinDate": "2020-12-14T20:35:38.315Z",
        "legendaryProgress": [
          {
            "date": "2020-12-14T20:35:38.315Z",
            "dbid": 0,
            "delete": true,
            "logUrl": "string",
            "section": "string",
            "value": 0
          }
        ],
        "losses": 0,
        "money": 0,
        "roles": [
          {
            "delete": true,
            "name": "string"
          }
        ],
        "session": {
          "accessToken": "string",
          "id": "string",
          "refreshToken": "string",
          "username": "string"
        },
        "username": "string",
        "wins": 0
      }*/