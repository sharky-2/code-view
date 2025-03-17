import json

from flask import Flask, render_template, request
from data import data_utils

app = Flask(__name__)
@app.route("/")
def MainPage(): return render_template("index.html")

@app.route("/Create-Page")
def Create_Page(): return render_template("CreatePage.html")

@app.route("/Test") 
def Test(): 
    module = ""

    with open("data/content.json") as f:
        data = json.load(f)

    for char in data.get("testLibary2", []): 
        type_ = char.get("type", None)
        title = char.get("title", None)
        text = char.get("text", None)
        img = char.get("img", None)
        button = char.get("button", None)

        module_function = getattr(data_utils, type_, None)
        if module_function: 
            module += module_function(title, text, img, button)

    return render_template("test.html", modules = module)

if __name__ == '__main__':
    app.run(debug=True)