// Place your application-specific JavaScript functions and classes here

var TopicForm = {
  editNewTitle: function(txtField) {
    jQuery('#new_topic').html((txtField.value.length > 5) ? txtField.value : 'New Topic');
  }
}

var LoginForm = {
  checkLogin: function(txt) {
    if(txt.value.match(/^https?:\/\//)) {
      jQuery('#password_fields').hide();
    } else {
      jQuery('#password_fields').show();
    }
  }
}

var EditForm = {
  // show the form
  init: function(postId) {
    jQuery('#edit-post-' + postId + '_spinner').show();
    this.clearReplyId();
  },

  // sets the current post id we're editing
  setReplyId: function(postId) {
    jQuery('#edit').attr('post_id', postId.toString());
    jQuery('#posts-' + postId + '-row').addClass('editing');
    if(jQuery('#reply')) jQuery('#reply').hide();
  },

  // clears the current post id
  clearReplyId: function() {
    var currentId = this.currentReplyId()
    if(!currentId || currentId == '') return;

    var row = jQuery('#posts-' + currentId + '-row');
    if(row) row.removeClass('editing');
    jQuery('#edit').attr('#post_id', '');
  },

  // gets the current post id we're editing
  currentReplyId: function() {
    return jQuery('#edit').attr('#post_id');
  },

  // checks whether we're editing this post already
  isEditing: function(postId) {
    if (this.currentReplyId() == postId.toString())
    {
      jQuery('#edit').show();
      jQuery('#edit_post_body').focus();
      return true;
    }
    return false;
  },

  // close reply, clear current reply id
  cancel: function() {
    this.clearReplyId();
    jQuery('#edit').hide()
  }
}

var ReplyForm = {
  // yes, i use setTimeout for a reason
  init: function() {
    EditForm.cancel();
    jQuery('#reply').toggle();
    jQuery('#post_body').focus();
    // for Safari which is sometime weird
//    setTimeout('$(\"post_body\").focus();',50);
  }
}

//Event.addBehavior({
//  '#search,#monitor_submit': function() { this.hide(); }
//})