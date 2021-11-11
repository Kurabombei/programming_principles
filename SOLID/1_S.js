// Single Responsibility Principle

/**
 * S in SOLID means:
 * ENG: " There should never be more than one reason for a class to change. "
 * In other words, every class should have only one responsibility.
 * UA: Кожен об'єкт має виконувати лише один обов'язок.
 * **/

class News {
    constructor(title = '', text='') {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true;
    }

    /** Following code shouldn't be here due to S principle.
     * This class has one responsibility, to update text
     *
     * It should be in the ancestor class.
     **/

    // getHTMLTemplate() {
    //     return `
    //         <div class="news-block">
    //             <h1>${ this.title }</h1>
    //             <p>${ this.text }</p>
    //         </div>
    //     `
    // }
    //
    // getJSONTemplate() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modified: this.modified
    //     }, null, 2);
    // }
}

// Class responsible for showing news in different formats.
class NewsPrinter {
    constructor(news) {
        this.news = news;
    }

    html(){
        return `
            <div class="news-block">
                <h1>${ this.news.title }</h1>
                <p>${ this.news.text }</p>
            </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2);
    }

    xml() {
        return `
        <news>
            <title>${ this.news.title }</title>
            <text>${ this.news.text }</text>
        </div>
        `
    }
}

const news = new News('JS is EVERYWHERE', 'JS is totally everywhere from web to servers and mobile development.');

console.log('news class', news);

const printer = new NewsPrinter( news );

console.log('printed news', printer.json());
console.log('printed news', printer.html());
console.log('printed news', printer.xml());
