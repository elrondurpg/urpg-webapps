export class QueryStringBuilder {
    static buildFromOptionalParameters(queryParams:any, ...parameterNames) {
        let queryString = "";

        if (!parameterNames) return queryString;

        parameterNames.forEach(paramName => {
            if (queryParams[paramName]) {
                if (queryString == "") {
                    queryString += "?";
                }
                else {
                    queryString += "&";
                }

                queryString += `${paramName}=${queryParams[paramName]}`;
            }
        });

        return queryString;
    }
}