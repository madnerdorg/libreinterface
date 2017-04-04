  /*
  Libre Interface - Code Editor Modal
  // Application Menu (Modal Remove/Add/Erase)
  // Code Editor Modal

  */

  //Show bottom menu
  function toggleMenu(){
    $('.ui.labeled.icon.sidebar').sidebar('toggle');
  }

  //Show Connectors manager
  function showConnectors(){
    $('.connectors-modal').modal('show');
  }

/* Application Modals */

  //Show Add Aplication Modal
  function showAdd(){
    $('.add-app-modal').modal({
      onApprove: function(){
        app_name = $("#add_app_input").val();
        add_application(app_name);
        change_app(app_name);
      },
      onDeny: function(){
        console.log("Deny");
        toggleMenu();
      }
    }).modal('show');
  }

//Show Remove application Modal
  function showRemove(){
    $('.remove-app-modal').modal({
      onApprove: function(){
        remove_application(app_name);
        change_app("index");
      },
      onDeny: function(){
        //console.log("Deny");
        toggleMenu();
      }
    }).modal('show');
  }

/* Local Storage Modals */


  //Show Erase Local Storage Modal
  function showErase(){
    $('.erase-modal').modal({
      onApprove: function(){
        erase_localStorage();
        location.reload();
      },
      onDeny: function(){
        //console.log("Deny");
        toggleMenu();
      }
    }).modal('show');
  }

/* Code Mirror Modal */

  // Show codeMirror modal
  function showCode(){
    //get custom code inside codemirror
    custom_code = $("#application").html();
    custom_code_editor.setValue(custom_code);
     
    
    //Show up the modal
    $('.code-modal').modal('setting',{
      onHide: function(){
        load_application();
      },
      onVisible: function(){
        custom_code_editor.refresh();

      }
    }).modal('show');

    //Refresh codeMirror (or the code won't show up until clicked)
    
  }

  //Hide codeMirror modal
  function hideCode(){
    $('.code-modal').modal('hide');
  }