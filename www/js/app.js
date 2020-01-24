'use strict';

$('.like-me').click(likeMe);

function likeMe(e) {
  let counter = $(e.target).siblings('span')[0];
  let count = parseInt($(counter).text());
  count++;
  $(counter).text(count);
}
