
def TitleCard(title, text, img, button):
    module = f"""
    <div class="TextFrames">
        <h1 class="TitleText TitleMainAnim">{title}</h1>
        <label class="UnderTitleText TextMainAnim">{text}</label>
        <a href="#" class="ButtonDesign ButtonHoverDesign ButtonMainAnim"><input type="button" value="{button}" class="InputButtonDesign"></a>
    </div>
    """
    return module
