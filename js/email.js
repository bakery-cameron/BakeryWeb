$(document).ready(function(){
	$('#message-submit').on('click',function(e){
		e.stopPropagation();
		e.preventDefault();
   		

		var data = {
			firstName:$('#message-first').val(),
			lastName:$('#message-last').val(),
			email:$('#message-email').val(),
			text:$('#message-textbox').val()
		}
		$.ajax( {
	      url: '../email-message',
	      type: 'POST',
	      data: data,
	      dataType: 'json',
	      success:function(){
	      	alert('Thanks!');
	      	$('#contact-career')[0].reset();
	      }
	    } );
	});
	$('#project-submit').on('click',function(e){
		e.stopPropagation();
		e.preventDefault();
   
   		var data = {
			firstName:$('#project-first').val(),
			lastName:$('#project-last').val(),
			email:$('#project-email').val(),
			company:$('#project-company').val(),
			text:$('#project-textbox').val()
		}
		$.ajax( {
	      url: '../email-project',
	      type: 'POST',
	      data: data,
	      dataType: 'json',
	      success:function(){
	      	alert('Thanks!');
	      	$('#contact-career')[0].reset();
	      }
	    } );
	});
	$('#resume-submit').on('click',function(e){
		e.stopPropagation();
		e.preventDefault();

		var files = document.getElementById('resume-file-input').files;
		var fd = new FormData();    
		fd.append( 'resume', files[0] );
		fd.append( 'firstName',$('#resume-first').val());
		fd.append( 'lastName',$('#resume-last').val());
		fd.append( 'email',$('#resume-email').val());
		fd.append( 'text',$('#resume-textbox').val());
		$.ajax( {
	      url: '../email-resume',
	      type: 'POST',
	      data: fd,
	      processData: false,
	      contentType: false,
	      success:function(){
	      	alert('Thanks!');
	      	$('#contact-career')[0].reset();
	      }
	    } );
	});



	$('#gif-submit').on('click',function(e){
		e.stopPropagation();
		e.preventDefault();
   
		var giffiles = document.getElementById('gif-file-input').files;
		var fd = new FormData();    
		fd.append( 'gif', giffiles[0] );
		fd.append( 'toemail',$('#gif-email').val());
		$.ajax( {
	      url: '../email-gif',
	      type: 'POST',
	      data: fd,
	      processData: false,
	      contentType: false,
	      success:function(){
	      	alert('Thanks!');
	      	$('#gif-form')[0].reset();
	      }
	    } );
	});
});