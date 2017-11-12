describe('search.js', function () {
  var highlightBackgroudColor = 'rgb(255, 255, 0)';
  var item1, item2, item3, item4;

  beforeAll(function (done) {
    // Wait for both the CSS and JS to be loaded before running any tests.
    var cssDone = false;
    var jsDone = false;

    function checkIfAllDone() {
      if (cssDone && jsDone) {
        done();
      }
    }

    // CSS
    var link = document.createElement('link');
    link.href = '/base/app/styles.css';
    link.rel = 'stylesheet';
    link.addEventListener('load', function() {
      cssDone = true;
      checkIfAllDone();
    });
    $('head').append(link);

    // HTML
    var html = loadCode('/base/app/index.html');
    var parsed = $('<div/>').append($.parseHTML(html));
    var container = parsed.find('.container');
    container.find('img').each(function () {
      this.src = this.src.replace('/images/', '/base/app/images/');
    });
    $('body').prepend(container);
    item1 = $('li:nth-child(1)');
    item2 = $('li:nth-child(2)');
    item3 = $('li:nth-child(3)');
    item4 = $('li:nth-child(4)');

    // JS
    var script = document.createElement('script');
    script.src = '/base/app/search.js';
    script.addEventListener('load', function () {
      jsDone = true;
      checkIfAllDone();
    });
    document.body.appendChild(script);
  });

  afterEach(function () {
    // Reset the background color.
    getHighlightedElements().css('background-color', '');

    // Show all items.
    $('li').css('display', '');

    // Clear out the search text.
    $('#searchBox').val('');
  });

  /**
   * Programmatically sets the search text and raises the 'keydown' event as if the enter key was pressed.
   *
   * @param text The text to enter into the search box.
   */
  function setSearchText(text) {
    var $searchBox = $('#searchBox');
    $searchBox.val(text);

    var event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    event.keyCode = 13;
    $searchBox[0].dispatchEvent(event);
  }

  /**
   * Gets all highlighted elements anywhere in the DOM.
   *
   * @returns {jQuery} A jQuery object that contains all highlighted elements.
   */
  function getHighlightedElements() {
    return $('*').filter(function (element) {
      return getComputedStyle(this).backgroundColor === highlightBackgroudColor;
    });
  }

  it('Should not highlight any elements initially', function () {
    expect(getHighlightedElements().length).toBe(0);
  });

  it('Should highlight two elements if the search text is "chicken"', function () {
    setSearchText('chicken');
    var highlighted = getHighlightedElements();
    expect(highlighted.length).toBe(2);

    var h1 = highlighted.eq(0);
    expect(h1.prop('tagName').toLowerCase()).toBe('dd');
    expect($.contains(item1[0], h1[0])).toBe(true);

    var h2 = highlighted.eq(1);
    expect(h2.prop('tagName').toLowerCase()).toBe('dd');
    expect($.contains(item2[0], h2[0])).toBe(true);
  });

  it('Should show only the first and second menu items if the search text is "chicken"', function () {
    setSearchText('chicken');
    var items = document.querySelectorAll('li');
    expect(getComputedStyle(items[0]).display).not.toBe('none');
    expect(getComputedStyle(items[1]).display).not.toBe('none');
    expect(getComputedStyle(items[2]).display).toBe('none');
    expect(getComputedStyle(items[3]).display).toBe('none');
  });

  it('Should show all items again if the search text is cleared out', function () {
    setSearchText('chicken');
    var items = document.querySelectorAll('li');

    setSearchText('');
    expect(getComputedStyle(items[0]).display).not.toBe('none');
    expect(getComputedStyle(items[1]).display).not.toBe('none');
    expect(getComputedStyle(items[2]).display).not.toBe('none');
    expect(getComputedStyle(items[3]).display).not.toBe('none');
  });

  it('Should hide all items if the search text is "chick"', function () {
    setSearchText('chick');
    var items = document.querySelectorAll('li');
    expect(getComputedStyle(items[0]).display).toBe('none');
    expect(getComputedStyle(items[1]).display).toBe('none');
    expect(getComputedStyle(items[2]).display).toBe('none');
    expect(getComputedStyle(items[3]).display).toBe('none');
  });

  it('Should not highlight any elements if the search text is "chick"', function () {
    setSearchText('chick');
    expect(getHighlightedElements().length).toBe(0);
  });

  it('Should highlight three elements if the search text is "salt"', function () {
    setSearchText('salt');
    var highlighted = getHighlightedElements();
    expect(highlighted.length).toBe(3);

    var h1 = highlighted.eq(0);
    expect(h1.prop('tagName').toLowerCase()).toBe('dd');
    expect($.contains(item1[0], h1[0])).toBe(true);

    var h2 = highlighted.eq(1);
    expect(h2.prop('tagName').toLowerCase()).toBe('dd');
    expect($.contains(item2[0], h2[0])).toBe(true);

    var h3 = highlighted.eq(2);
    expect(h2.prop('tagName').toLowerCase()).toBe('dd');
    expect($.contains(item4[0], h3[0])).toBe(true);
  });

  it('Should show the first, second, and fourth menu items if the search text is "salt"', function () {
    setSearchText('salt');
    var items = document.querySelectorAll('li');
    expect(getComputedStyle(items[0]).display).not.toBe('none');
    expect(getComputedStyle(items[1]).display).not.toBe('none');
    expect(getComputedStyle(items[2]).display).toBe('none');
    expect(getComputedStyle(items[3]).display).not.toBe('none');
  });

  it('Should highlight two elements if the search text is "bAlSaMiC VinEgaR"', function () {
    setSearchText('bAlSaMiC VinEgaR');
    var highlighted = getHighlightedElements();
    expect(highlighted.length).toBe(2);

    var h1 = highlighted.eq(0);
    expect(h1.prop('tagName').toLowerCase()).toBe('dd');
    expect($.contains(item1[0], h1[0])).toBe(true);

    var h2 = highlighted.eq(1);
    expect(h2.prop('tagName').toLowerCase()).toBe('dd');
    expect($.contains(item4[0], h2[0])).toBe(true);
  });

  it('Should show the first and fourth menu items if the search text is "bAlSaMiC VinEgaR"', function () {
    setSearchText('bAlSaMiC VinEgaR');
    var items = document.querySelectorAll('li');
    expect(getComputedStyle(items[0]).display).not.toBe('none');
    expect(getComputedStyle(items[1]).display).toBe('none');
    expect(getComputedStyle(items[2]).display).toBe('none');
    expect(getComputedStyle(items[3]).display).not.toBe('none');
  });

  it('Should highlight four elements if the search text is "calories"', function () {
    setSearchText('calories');
    var highlighted = getHighlightedElements();
    expect(highlighted.length).toBe(4);

    var h1 = highlighted.eq(0);
    expect(h1.prop('tagName').toLowerCase()).toBe('span');
    expect($.contains(item1[0], h1[0])).toBe(true);

    var h2 = highlighted.eq(1);
    expect(h2.prop('tagName').toLowerCase()).toBe('span');
    expect($.contains(item2[0], h2[0])).toBe(true);

    var h3 = highlighted.eq(2);
    expect(h2.prop('tagName').toLowerCase()).toBe('span');
    expect($.contains(item3[0], h3[0])).toBe(true);

    var h4 = highlighted.eq(3);
    expect(h2.prop('tagName').toLowerCase()).toBe('span');
    expect($.contains(item4[0], h4[0])).toBe(true);
  });

  it('Should show all four menu items if the search text is "calories"', function () {
    setSearchText('calories');
    var items = document.querySelectorAll('li');
    expect(getComputedStyle(items[0]).display).not.toBe('none');
    expect(getComputedStyle(items[1]).display).not.toBe('none');
    expect(getComputedStyle(items[2]).display).not.toBe('none');
    expect(getComputedStyle(items[3]).display).not.toBe('none');
  });

  it('Should highlight only one element if the search text is "Pasta Caprese"', function () {
    setSearchText('Pasta Caprese');
    var highlighted = getHighlightedElements();
    expect(highlighted.length).toBe(1);

    var h1 = highlighted.eq(0);
    expect(h1.prop('tagName').toLowerCase()).toBe('h2');
    expect($.contains(item1[0], h1[0])).toBe(true);
  });

  it('Should show only the first menu item if the search text is "Pasta Caprese"', function () {
    setSearchText('Pasta Caprese');
    var items = document.querySelectorAll('li');
    expect(getComputedStyle(items[0]).display).not.toBe('none');
    expect(getComputedStyle(items[1]).display).toBe('none');
    expect(getComputedStyle(items[2]).display).toBe('none');
    expect(getComputedStyle(items[3]).display).toBe('none');
  });

  it('Should highlight only one element if the search text is "Chicken Enchiladas"', function () {
    setSearchText('Chicken Enchiladas');
    var highlighted = getHighlightedElements();
    expect(highlighted.length).toBe(1);

    var h1 = highlighted.eq(0);
    expect(h1.prop('tagName').toLowerCase()).toBe('h2');
    expect($.contains(item2[0], h1[0])).toBe(true);
  });

  it('Should show only the second menu item if the search text is "Chicken Enchiladas"', function () {
    setSearchText('Chicken Enchiladas');
    var items = document.querySelectorAll('li');
    expect(getComputedStyle(items[0]).display).toBe('none');
    expect(getComputedStyle(items[1]).display).not.toBe('none');
    expect(getComputedStyle(items[2]).display).toBe('none');
    expect(getComputedStyle(items[3]).display).toBe('none');
  });

  it('Should highlight only one element if the search text is "Brazilian Caramel Flan"', function () {
    setSearchText('Brazilian Caramel Flan');
    var highlighted = getHighlightedElements();
    expect(highlighted.length).toBe(1);

    var h1 = highlighted.eq(0);
    expect(h1.prop('tagName').toLowerCase()).toBe('h2');
    expect($.contains(item3[0], h1[0])).toBe(true);
  });

  it('Should show only the third menu item if the search text is "Brazilian Caramel Flan"', function () {
    setSearchText('Brazilian Caramel Flan');
    var items = document.querySelectorAll('li');
    expect(getComputedStyle(items[0]).display).toBe('none');
    expect(getComputedStyle(items[1]).display).toBe('none');
    expect(getComputedStyle(items[2]).display).not.toBe('none');
    expect(getComputedStyle(items[3]).display).toBe('none');
  });

  it('Should highlight only one element if the search text is "Bruschetta"', function () {
    setSearchText('Bruschetta');
    var highlighted = getHighlightedElements();
    expect(highlighted.length).toBe(1);

    var h1 = highlighted.eq(0);
    expect(h1.prop('tagName').toLowerCase()).toBe('h2');
    expect($.contains(item4[0], h1[0])).toBe(true);
  });

  it('Should show only the fourth menu item if the search text is "Bruschetta"', function () {
    setSearchText('Bruschetta');
    var items = document.querySelectorAll('li');
    expect(getComputedStyle(items[0]).display).toBe('none');
    expect(getComputedStyle(items[1]).display).toBe('none');
    expect(getComputedStyle(items[2]).display).toBe('none');
    expect(getComputedStyle(items[3]).display).not.toBe('none');
  });
});
