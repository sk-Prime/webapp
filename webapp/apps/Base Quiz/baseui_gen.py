from htmlman import HTMLMan
from styleman import Template

page=HTMLMan()
page.make_responsive()
page.add_title("Base Quiz")
style=Template('antartica')

page.add_body_class(style['page'])
page.add_js("baseui.js")
page.create_section('main',append=True)
page['main'].add_style_class(style['main'])

title=page.create_section('title')
title.add_style_class(style['title'])

title.add_content("Base Quiz")

widget=page.create_section("widget")
widget.add_style_class(style['widget'])

label = page.create_section('label',ID='label')
#label.add_style_class(style['center'])
label.add_style(name='label',mode="class")
label.style_to_cssman(style)
label.style(
    "font-size","20pt",
    "font-family","monospace",
    "height","50px",
    "border-bottom","1px solid #ccd",
    )


label.add_content("0x0")

answer_l=page.create_section("answer_l1",ID="label_t")
answer_l.add_style_class(style["label"])

answer_l2=page.create_section("answer_l2",ID="label_b")
answer_l2.add_style_class(style["label"])

controls = page.create_section("control")
controls.add_style(name="control",mode="class",cssman_obj=style)
controls.style(
    "display","grid",
    "grid-template-columns","1fr 1fr",
    "gap","10px",
    "padding","10px"
)
rand_b=page.create_section('random',tag="button",inner_html="Random")
rand_b.config_attr("type","button","onclick","randomize()")

answer_b=page.create_section('answer_b',tag="button",inner_html="Answer")
answer_b.config_attr("type","button","onclick","answer()")


controls.add_content(rand_b)
controls.add_content(answer_b)

widget.add_content(label)
widget.add_content(answer_l)
widget.add_content(answer_l2)
widget.add_content(controls)

page['main'].add_content(title)
page['main'].add_content(widget)

page.render(style,html_path="baseui.html")