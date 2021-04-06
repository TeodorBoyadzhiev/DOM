function solve() {
   document.getElementsByClassName('btn create')[0].addEventListener('click', createEl);
   function createEl(event) {
      event.preventDefault();

      const title = document.getElementById('title').value;
      const creator = document.getElementById('creator').value;
      const category = document.getElementById('category').value;
      const content = document.getElementById('content').value;

      const article = e('article');
      const titleEl = e('h1', title);
      const categoryP = e('p', 'Category:');
      const strongCategory = e('strong', category);
      categoryP.appendChild(strongCategory);

      const creatorP = e('p', 'Creator:');
      const strongCreator = e('strong', creator);
      creatorP.appendChild(strongCreator);

      const contentP = e('p', content);

      const buttons = e('div', '', 'buttons');
      const delBtn = e('button', 'Delete', 'btn delete');
      const archBtn = e('button', 'Archieve', 'btn archieve');
      buttons.appendChild(delBtn);
      buttons.appendChild(archBtn);

      article.appendChild(titleEl);
      article.appendChild(categoryP);
      article.appendChild(creatorP);
      article.appendChild(contentP);
      article.appendChild(buttons);

      const section = document.getElementsByTagName('section')[1];

      section.appendChild(article);

      delBtn.addEventListener('click', () => del(event, article));
      archBtn.addEventListener('click', () => archieve(event, article, title));

      document.getElementById('title').value = '';
      document.getElementById('creator').value = '';
      document.getElementById('category').value = '';
      document.getElementById('content').value = '';
   }

   function e(type, content, className) {
      const result = document.createElement(type);

      result.textContent = content;
      if (className) {
         result.className = className;
      }
      return result;
   }

   function del(event, article) {
      event.preventDefault();
      article.remove();
   }

   function archieve(event, article, titleEl) {
      event.preventDefault();
      article.remove();

      const element = e('li', titleEl);
      const ol = document.getElementsByClassName('archive-section')[0];

      ol.appendChild(element);
   }

}


