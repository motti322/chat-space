$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message-box" data-message-id=${message.id}>
           <div class="message-box__name">
             ${message.user_name}
           </div>
           <div class="message-box__date">
             ${message.created_at}
           </div>
           <div class="chat">
             ${message.content}
           </div>
         </div>
         <img src=${message.image} >`
     return html;
   } else {
     var html =
      `<div class="message-box" data-message-id=${message.id}>
           <div class="message-box__name">
             ${message.user_name}
           </div>
           <div class="message-box__date">
             ${message.created_at}
           </div>
         </div>
         <div class="chat">
           ${message.content}
         </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__message-list').append(html);
    $('form')[0].reset();
    $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
    $('.send-btn').prop('disabled', false);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
    $('.send-btn').prop('disabled', false);
  })

  });

  var reloadMessages = function() {
    var last_message_id = $('.message-box:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages)
      if (messages.length !== 0) {
     var insertHTML = '';
     $.each(messages, function(i, message) {
       insertHTML += buildHTML(message)
     });
     $('.chat-main__message-list').append(insertHTML);
     $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
    if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});