/**
 * 
 */
/**
 * BlogService
 */

app.factory('BlogService',function($http){
	var blogService={}
	
	blogService.addBlog=function(blog){
		return $http.post("http://localhost:8086/ProAngMe/addblogpost",blog)
	}
	blogService.getBlogsWaitingForApproval=function(){
		return $http.get("http://localhost:8086/ProAngMe/getblogs/"+0)
	}
	blogService.getBlogsApproved=function(){
		return $http.get("http://localhost:8086/ProAngMe/getblogs/"+1)
	}
	blogService.getBlog=function(id){
		return $http.get("http://localhost:8086/ProAngMe/getblogs/"+id)
	}
	blogService.approve=function(blog){
		//blog.approved=0
		return $http.put("http://localhost:8086/ProAngMe/approve",blog)
	    //blog approved=1
	}
   blogService.reject=function(blog,rejectionReason){
	   //blog.approved=0
    	return $http.put("http://localhost:8086/ProAngMe/reject/"+rejectionReason,blog)
    	//blogrecord will be deleted
   }
   blogService.updateLikes=function(id){
	   return $http.put("http://localhost:8086/ProAngMe/updatelikes/"+id);
   }
   blogService.addComment=function(blogComment){          //(id,commentTxt){
	   return $http.post("http://localhost:8086/ProAngMe/addcomment",blogComment)               //"+id+""/+commentTxt) ;
   }
   blogService.getBlogComments=function(id){
	   return$http.get("http://localhost:8086/ProAngMe/blogcomments/"+id)
   }
	return blogService;
	
})