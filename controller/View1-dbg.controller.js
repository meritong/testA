sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {
            // Initialize the JSONModel
            var oModel = new JSONModel();
            this.getView().setModel(oModel, "schedule");
        },

        onFetchSchedule: function () {
            var oModel = this.getView().getModel("schedule");

           // var sUrl = "/scheduleApi/schedule?bookableAssetIds=c641abdd-6352-477b-8d34-d5b299922330&fromInclusive=2024-09-02&toInclusive=2024-09-08";


            $.ajax({
                url: "https://api.booking.oslo.kommune.no/api/schedule?bookableAssetIds=c641abdd-6352-477b-8d34-d5b299922330&fromInclusive=2024-09-30&toInclusive=2024-10-06",
                method: "GET",
                success: function(response) { 
                  console.log(response);
                },
                error: function(error) {
                  console.log("Error:", error);
                }
              });
            /* oModel.loadData(sUrl);

            oModel.attachRequestCompleted(function() {
                MessageToast.show("Schedule fetched successfully!");
            });

            oModel.attachRequestFailed(function() {
                MessageToast.show("Failed to fetch schedule!");
            }); */
        }
    });
});
