({
	myAction : function(component, event, helper) {
		component.set("v.Column",[
            {label:"First Name", fieldName:"firstName", text:"type"},
            {label:"Last Name", fieldName:"LastName", text:"type"},
            {label:"Phone", fieldName:"Phone", text:"Phone"}
        ]);
        var action = component.get("c.getContacts");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function(data){
            component.set("v.contacts", data.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})
