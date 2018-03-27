/**
 * 
 */

app.factory('NotificationService',function($http){
	var notificationService={}
			notificationService.getNotificationsNotViewed=function(){
				return $http.get("http://localhost:8086/ProAngMe/getnotifications")
			}
	notificationService.getNotification=function(id){
		return $http.get("http://localhost:8086/ProAngMe/getnotification/"+id)
	}
	return notificationService;
})