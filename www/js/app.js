'use strict';
let page = 1;
$('.like-me').click(likeMe);

function likeMe(e) {
  let counter = $(e.target).siblings('span')[0];
  let count = parseInt($(counter).text());
  count++;
  $(counter).text(count);
}

$('#mooooooooooore').click(getMore);

function getMore(e) {
  page++;
  $.ajax((`/characters/${page}`), { method: 'GET', dataType: 'JSON' })
    .then(charObj => {
      // console.log(charObj);
      const charArray = charObj.results;
      charArray.forEach(charData => {
        let dynamicCharacter = new SWCharacter(charData);
        console.log(dynamicCharacter);
        let renderCharacters = dynamicCharacter.render();
        $('section.dynamic-characters').append(renderCharacters);
      });
    });
}

function SWCharacter(charData) {
  this.name = charData.name;
  this.likes = 0;
  this.height = charData.height;
}
SWCharacter.prototype.render = function () {
  let source = $('#entry-template').html();
  let template = Handlebars.compile(source);
  return template(this);
};
