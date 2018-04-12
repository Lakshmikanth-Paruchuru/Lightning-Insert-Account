({
	saveContacts : function(component, event, helper) {
		var accName = component.find("name").get("v.value");
        var accPhone = component.find("phone").get("v.value");
        var accIndustry = component.find("industry").get("v.value");
        var accRating = component.find("rating").get("v.value");
        var accType = component.find("type").get("v.value");
        
        console.log("Name is :"+accName);
        console.log("Phone is "+accPhone);
        console.log("Industry is "+accIndustry);
        console.log("Rating is "+accRating);
        console.log("Type is "+accType);
        
        var action = component.get("c.setAccount");
        action.setParams({
            "name" : accName, "phone" : accPhone, "industry" : accIndustry, "rating" : accRating,
            "type" : accType
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            var message = response.getReturnValue();
            if (state == "SUCCESS")
            {
                
                alert(message);
            }
            else
            {
                alert(message);
                
            }
        });
        $A.enqueueAction(action);
	}
})