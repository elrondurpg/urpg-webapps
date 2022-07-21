// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: "DEV",
  host: "http://dev.pokemonurpg.com",
  api:"http://dev.pokemonurpg.com:8080",
  sessionApi: "http://dev.pokemonurpg.com/api",
  imageBase:"https://pokemonurpg.com/img",
  spriteBase: "https://pokemonurpg.com/img/sprites/",
  iconBase: "https://pokemonurpg.com/img/icons/",
  modelBase: "https://pokemonurpg.com/img/models/v1/",
  oauth2ClientID: "992917009945866332",
  oauth2Url: "https://discordapp.com/api/oauth2/authorize",
  oauth2ResponseType: "code",
  oauth2Scope: "identify",
  oauth2RedirectUrl: "http://dev.pokemonurpg.com/api/loginRedirect.php",
  prefix: "staging-"
};
