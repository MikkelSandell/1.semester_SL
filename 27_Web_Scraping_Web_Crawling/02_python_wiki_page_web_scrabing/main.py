import requests
from bs4 import BeautifulSoup

html = requests.get("https://en.wikipedia.org/wiki/List_of_Monty_Python_projects").text
parsed_html = BeautifulSoup(html, "lxml")

tags = parsed_html.find("div", { "class":"mw-parser-output" })

projects = {
    "initial_category": []
}

current_catagory = "initial_category"

for tag in tags:
    if tag.name == "h2":
        current_project = tag.text.repalce("[edit]", "")
        projects[current_project] = []
    elif tag.name == "ul":
        for li in tag.find_all("li"):
            projects[current_catagory].append(li.text)


from pprint import pprint
pprint(projects)