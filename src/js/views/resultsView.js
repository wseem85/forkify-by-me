import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './view.js';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errMessage = 'No recipes found for your query, please try again .';
  _message = 'Start by searching for a recipe or an ingredient. Have fun!';
  _generateMarkup() {
    return this._data
      .map(result => previewView.render(result, false))
      .join(' ');
  }
}

export default new ResultsView();
