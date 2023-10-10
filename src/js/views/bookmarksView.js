import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
import View from './view.js';
class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errMessage = 'No Bookmarks Yet , Find a nice recipe and bookmark it  .';
  _message = 'Start by searching for a recipe or an ingredient. Have fun!';
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join(' ');
  }
  addStorageHandler(handler) {
    window.addEventListener('load', function () {
      handler();
    });
  }
}

export default new BookmarksView();
