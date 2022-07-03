// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: "PROD",
  host: "http://staging.pokemonurpg.com",
  api:"http://localhost:8080",
  sessionApi: "http://localhost/api",
  imageBase:"https://pokemonurpg.com/img",
  spriteBase: "https://pokemonurpg.com/img/sprites/",
  iconBase: "https://pokemonurpg.com/img/icons/",
  modelBase: "https://pokemonurpg.com/img/models/",
  oauth2ClientID: "610294152034385922",
  oauth2Url: "https://discordapp.com/api/oauth2/authorize",
  oauth2ResponseType: "code",
  oauth2Scope: "identify",
  oauth2RedirectUrl: "http://localhost/api/loginRedirect.php",
  prefix: "staging-"
};
