#!/usr/bin/env python3
import os

class WebApp():
    def __init__(self):
        self.dir="./apps"
        self.name="index.html"
        self.html="""
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Web App drawer</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="stylesheet" href="styles.css">
                    <script src="script.js"></script> 
                </head>
                <body onLoad="changeColor()">
                    <div class="page_title">WebApp</div>
                    <button onclick="toggle()" id="button" type="button">Day</button>
                    <div class="app_list">
        """
        self.endhtml="</div></body></html>"
    
    def item_t1(self,name,link):
        temp=f"""<a class="link" href="{link}">
                    <div class="app_name_big">{name}</div>
                    <div class="app_name">&nbsp;</div>
                </a>"""
        self.html+=temp

    def item_t2(self,name,link,img):
        temp=f"""<a class="link" href="{link}">
                    <img class="app_icon" src="{img}">
                    <div class="app_name">{name}</div>
                </a>"""
        self.html+=temp

    def get_image_path(self,name)->str:
        valid_image_type=['svg','png']
        for image_type in valid_image_type:
            if os.path.exists(self.dir+f"/{name}/{name}.{image_type}"):
                return self.dir+f"/{name}/{name}.{image_type}"
        else:
            return ""

    def generate_link(self):
        listdir=os.listdir(self.dir)
        for item in listdir:
            if os.path.exists(self.dir+f"/{item}/{item}.html") and item:
                link=self.dir+f"/{item}/{item}.html"
                img=self.get_image_path(item)
                if img:
                    self.item_t2(item.lower().capitalize(), link,img)
                else:
                    self.item_t1(item.lower().capitalize(), link)
        self.html+=self.endhtml
    def write_html(self):
        with open(self.name,'w') as htmlfile:
            htmlfile.write(self.html)
        print("success")

if __name__=="__main__":
    webapp=WebApp()
    webapp.generate_link()
    webapp.write_html()