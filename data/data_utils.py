import json

def design(**context):
    title = context.get("title")
    text = context.get("text")

    module = f"""
    """
    return module

def TextModule(**context):
    title = context.get("title")
    text = context.get("text")

    module = f"""
    <section>
        <div></div>
        <div><label class="code-text-design">text-4xl text-white tracking-tighter text-balance</label></div>
        <div><h1 class="title-design-2">{title}</h1></div>
        <div><label class="code-text-design">text-base text-white</label></div>
        <div><label class="text-design-2">{text}</label></div>
        <div><button class="button-design-2 hover-glitchy">Discover Stellar Plus</button></div>
    
        <code class="side-frame-text blue-color code-text-design-2">introduction</code>
    </section> 
    """
    return module

def ImageModule(**context):
    title = context.get("title")
    img = context.get("img")

    module = f"""
    <!-- Img Module -->
    <section class="Image-module">
        <div></div>
        <div><label class="code-text-design">text-4xl text-white tracking-tighter text-balance</label></div>
        <div><h1 class="title-design-2">{title}</h1></div>
        <div class="image-frame"><img src="{img}"></div>
    </section>
    """
    return module

def AccordionModule(**context):
    accordion_amount = context.get("accordion_amount")
    page_name = context.get("page_name")

    item = ""
    for i in range(accordion_amount):

        with open("data/content.json") as f:
            data = json.load(f)

        for char in data.get(page_name, []):
            type_ = char.get("type", None)
            if type_ == "AccordionModule": 

                question = char.get(f"question-{i}", None)
                answer = char.get(f"answer-{i}", None)
                    
                item += f"""
                <div class="item text-design-2">
                    <div class="question">
                        <label class="text">{question}</label>
                        <div class="dropdown">></div>
                    </div>
                    <div class="answer">{answer}</div>
                </div>
                """

    module = f"""
    <section>
        <div></div>
        <div style="align-items: start; padding: 0;">
            <div id="accordion-list">
                {item}
            </div>
        </div>
        <code class="side-frame-text pink-color code-text-design-2">Accordions</code>
    </section>
    """
    return module

def ImageGalreyModule(**context):
    image_amount = context.get("image_amount")
    page_name = context.get("page_name")

    item = ""
    for i in range(image_amount):

        with open("data/content.json") as f:
            data = json.load(f)

        for char in data.get(page_name, []):

            type_ = char.get("type", None)
            if type_ == "ImageGalreyModule": 
                image = char.get(f"img-{i}", None)
                item += f"""<img src="{image}">"""

    module = f"""
    <section>
        <div></div>
        <div><label class="code-text-design">img-4xl img-sze img-center</label></div>
        <div class="img-galery">
            {item}
        </div>
    </section>
    """
    return module

def BlogModule(**context):
    blog_amount = context.get("blog_amount")
    page_name = context.get("page_name")

    item = ""
    for i in range(blog_amount):

        with open("data/content.json") as f:
            data = json.load(f)

        for char in data.get(page_name, []):

            type_ = char.get("type", None)
            if type_ == "BlogModule": 
                title = char.get(f"title-{i}", None)
                text = char.get(f"text-{i}", None)
                item += f"""
                {'<div></div>' if i > 0 else ''}
                <div><label class="code-text-design">text-4x2 tracking-tighter text-balance</label></div>
                <div><h1 class="title-design-2">{title}</h1></div>
                <div><label class="code-text-design">text-base text-white</label></div>
                <div><label class="text-design-2">{text}</label></div>
                """

    module = f"""
    <section style="margin-top: 100px; margin-bottom: 100px;">
        {item}
    </section>
    """
    return module

def CardModule(**context):
    title = context.get("title")
    text = context.get("text")
    card_amount = context.get("card_amount")
    page_name = context.get("page_name")

    item = ""
    for i in range(card_amount):

        with open("data/content.json") as f:
            data = json.load(f)

        for char in data.get(page_name, []):

            type_ = char.get("type", None)
            if type_ == "CardModule": 
                card_image = char.get(f"img-{i}", None)
                card_title = char.get(f"title-{i}", None)
                card_text = char.get(f"text-{i}", None)
                card_rank = char.get(f"rank-{i}", None)

                item += f"""
                <div class="card">
                    <img src="{card_image}">
                    <h2 class="title-design-2">{card_title}<label class="side-text rank-{card_rank}">{card_rank}</label></h2>
                    <label class="text-design-2">{card_text}</label>
                </div>
                """

    module = f"""
    <section style="margin-top: 100px; margin-bottom: 100px;">
        <div><label class="code-text-design">text-4x2 tracking-tighter text-balance</label></div>
        <div><h1 class="title-design-2">{title}</h1></div>
        <div><label class="code-text-design">text-base text-white text-size text-5x1</label></div>
        <div><label class="text-design-2">{text}</label></div>
        
        <div class="cards-frame">
            {item}
        </div>
    </section>
    """
    return module