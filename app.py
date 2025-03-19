import json

from flask import Flask, render_template, request
from data import data_utils

app = Flask(__name__)
@app.route("/")
def MainPage(): return render_template("index.html")

@app.route("/Test") 
def Test(): 
    name_ = "test-page"
    module = ""

    with open("data/content.json") as f:
        data = json.load(f)

    for char in data.get(name_, []): 
        type_ = char.get("type", None)
        title = char.get("title", None)
        text = char.get("text", None)
        img = char.get("img", None)
        button = char.get("button", None)

        accordion_amount = char.get("accordion_amount", None)
        image_amount = char.get("image_amount", None)
        blog_amount = char.get("blog_amount", None)
        card_amount = char.get("card_amount", None)
        
        module_function = getattr(data_utils, type_, None)
        if module_function: 
            module += module_function(title, text, img, button, accordion_amount, image_amount, blog_amount, card_amount, name_)

    return render_template("test.html", modules = module)

if __name__ == '__main__':
    app.run(debug=True)