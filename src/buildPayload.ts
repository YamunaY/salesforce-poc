enum FormType {
    ThreeToTenGrant = "3-10k-grant",
    PermissionToStart = "permission-to-start",
}

export default function buildPayload(organisationName: string, projectName: string, formType: FormType = FormType.ThreeToTenGrant) {
    switch (formType) {
        case FormType.ThreeToTenGrant:
            return {
                "meta": {
                    "form": "3-10k-grant",
                    "schemaVersion": "v1.x",
                    "environment": "production",
                    "commitId": "b4ecf18eae01d34b296e9388f387cc42bf7c0f93",
                    "locale": "en",
                    "username": "example@example.com",
                    "applicationId": "a9bffed0-e131-11e9-880f-31a49a4bf599",
                    "startedAt": "2019-05-17T15:34:13.000Z"
                },
                "application": {
                    "projectName": projectName,
                    "projectDateRange": {
                        "startDate": "2020-12-12",
                        "endDate": "2020-12-12"
                    },
                    "projectAddress": {
                        "projectPostcode": "B15 1TR",
                        "line1": "82553 Demarco Rapid",
                        "townCity": "Waelchitown",
                        "county": "Berkshire"
                    },
                    "yourIdeaProject": "Free text…",
                    "projecDifference": "More free text",
                    "projectCommunity": "Even more free text",
                    "projectOrgBestPlace": "Even more and more free text",
                    "projectAvailable": "Even more more more text",
                    "projectOutcome1": "More and more and more free text",
                    "projectOutcome2": "More and more and more free text",
                    "projectOutcome3": "More and more and more free text",
                    "projectOutcome4": "More and more and more free text",
                    "projectOutcome5": "More and more and more free text",
                    "projectOutcome6": "More and more and more free text",
                    "projectOutcome7": "More and more and more free text",
                    "projectOutcome8": "More and more and more free text",
                    "projectOutcome9": null,
                    "projectTotalCosts": 20000,
                    "organisationId": "c23e12e0-e69e-11e9-aaf2-2514879727cc",
                    "organisationName": organisationName,
                    "organisationAddress": {
                        "line1": "82553 Demarco Rapid",
                        "townCity": "Waelchitown",
                        "county": "Berkshire",
                        "postcode": "B15 1TR"
                    },
                    "organisationType": "not-for-profit-company",
                    "companyNumber": "123456789",
                    "charityNumber": null,
                    "charityNumberNi": null,
                    "mainContactName": "Nelda",
                    "mainContactDateOfBirth": "1975-10-12",
                    "mainContactAddress": {
                        "line1": "41465 Bashirian Oval",
                        "townCity": "Friesenhaven",
                        "county": "Berkshire",
                        "postcode": "B15 1TR"
                    },
                    "mainContactEmail": "Lizzie90@example.com",
                    "mainContactPhone": "0345 4 10 20 30",
                    "authorisedSignatoryRole": "trustee",
                    "authorisedSignatoryName": "Jane Doe",
                    "authorisedSignatoryPhone": "07777 777777",
                    "authorisedSignatoryEmail": "jane@example.com"
                }
            }
            case FormType.PermissionToStart: return {
                "meta": {
                    "form": "permission-to-start",
                    "schemaVersion": "v1.x",
                    "environment": "production",
                    "commitId": "b4ecf18eae01d34b296e9388f387cc42bf7c0f93",
                    "locale": "en",
                    "username": "example@example.com",
                    "applicationId": "9453d770-e450-11e9-b3b6-212ded63c337",
                    "startedAt": "2019-05-17T15:34:13.000Z"
                },
                "application": {
                    "proposedChanges": "freeText",
                    "permissions": [
                        {"permissionType": "free text", "anticipatedDate": "2019-01-01", "receivedDate": "2019-01-02"},
                        {"permissionType": "free text 2", "anticipatedDate": "2019-01-01", "receivedDate": null}
                        ],
                        "bankAccountName": "free text",
                        "bankAccountNumber": "12345678" ,
                        "buildingSocietyNumber": "12345678",
                        "bankAccountsortCode": "12345678",
                        "paymentReference": "free text",            
                        "signatory1": "Jane",
                        "signatory2": "John",
                        "signatory3": "David",
                        "securedPartnershipFunding": "Yes",
                        "willAdvertise": "notApplicable",
                        "hasStatutoryPermissions": "Yes",
                        "agreeTerms": true,
                        "termsPersonName": "Jane",
                        "termsPersonOrganisation": "foo charity",
                        "termsPersonPosition": "free text",
                        "terms1": true,                                                           
                        "terms2": true,                                                           
                        "terms3": true,                                                           
                        "terms4": true,                                                           
                        "terms5": true,                                                           
                        "terms6": true,
                        "onBehalfOfPartnership": true
                }
            }
        default: return new Error('Unknown type')
    }
}  