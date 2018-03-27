/**
 *
 * jobservice
 * 
 */

app.factory('JobService',function($http){
	var jobservice={}

	
	jobservice.addjob=function(job){
	return $http.post("http://localhost:8086/ProAngMe/addjob",job)
}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8086/ProAngMe/alljobs");
	}
	jobService.getJob=function(id){
		return $http.get("http://localhost:8086/ProAngMe/getjob/"+id);
	}
return jobService;
})