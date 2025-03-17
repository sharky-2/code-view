
def TitleCard(title, text, img, button):
    module = f"""
    <div class="TextFrames">
        <h1 class="TitleText TitleMainAnim">{title}</h1>
        <label class="UnderTitleText TextMainAnim">{text}</label>
        <a href="#" class="ButtonDesign ButtonHoverDesign ButtonMainAnim"><input type="button" value="{button}" class="InputButtonDesign"></a>
    </div>
    """
    return module

def Card(title, text, img, button):
    module = f"""
    <div class="CardFrames" style="--count: 8">
        <div class="Card"><h1>{title}</h1><lable class='CardTextLable'>{text}</lable></div>
        <div class="Card"><h1>{title}</h1><lable class='CardTextLable'>{text}</lable></div>
        <div class="Card"><h1>{title}</h1><lable class='CardTextLable'>{text}</lable></div>
        <div class="Card"><h1>{title}</h1><lable class='CardTextLable'>{text}</lable></div>
        <div class="Card"><h1>{title}</h1><lable class='CardTextLable'>{text}</lable></div>
        <div class="Card"><h1>{title}</h1><lable class='CardTextLable'>{text}</lable></div>
        <div class="Card"><h1>{title}</h1><lable class='CardTextLable'>{text}</lable></div>
    </div>
    """
    return module

def TextCard(title, text, img, button):
    module = f"""
    <div class="TextCard">
        <lable class="TextFrame">{text}</lable>
        <img src={img}>
    </div>
    """
    return module

def ThreeCards(title, text, img, button):
    module = f"""
    <div class="ThreeCardFrame">
        <div class="Card"><img src={img}> <h1>{title}</h1> {text} <input type='button' value={button}> </div>
        <div class="Card"><img src={img}> <h1>{title}</h1> {text} <input type='button' value={button}> </div>
        <div class="Card"><img src={img}> <h1>{title}</h1> {text} <input type='button' value={button}> </div>
        <div class="Card"><img src={img}> <h1>{title}</h1> {text} <input type='button' value={button}> </div>
    </div>
    """
    return module