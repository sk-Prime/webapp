# webapp
If you want to run javascript app like anyother app in your android device, you can follow this steps.

1. Install Termux in your device using f-droid

2. In termux install git using `pkg install git`

3. In termux write `git clone https://github.com/sk-Prime/webapp` if you don't want to use git, just go to this [This git link ](https://github.com/sk-Prime/webapp) and download as zip and extract to your desired folder.

4. In Termux, write `cd webapp`

5. Then `mv webapp your-desired-location` 

6. If you don't have python installed in termux use `pkg install python` to install it. [in fututre <sup>TM</sup> I will remove this dependency]

The webapp directory looks like this
```
├── apps
│   ├── Base Quiz
│   │   ├── Base Quiz.html
│   │   ├── Base Quiz.svg
│   │   └── baseui.js
│   └── resistor
│       ├── resistor.html
│       ├── resistor.js
│       ├── resistor.svg
├── index.html
├── script.js
├── styles.css
└── webapp.py
```

- `apps` is the directory where you need to put your app folder which contains javascript and html files. `webapp.py` assumes the folder name as the app name. And inside the folder the main page and icon [if you want to show a icon] name must need to be same as folder name. You can modify `webapp.py` to change its behavior.

- `index.html` is the page where all the apps in the `apps` folder will be shown. So download a browser from play store. set this `index.html` as the homepage of that browser.

- `webapp.py` is the main program which will modify `index.html` to add apps in it. I will make a binary file soon <sup>TM</sup>. so python will not require.

- Everything is done. Simply put your javascript app in `apps` folder and run `python webapp.py` and then open the browser which is previously configured.

To make that final step automatic. You can put a `webapp.sh` in termux `.shortcuts`  folder. (You may need to install termux:widget app). Then you will see `webapp.sh` in termux widget. Inside `webapp.sh`write down this

```
cd $HOME/storage/shared/myfolder/web/webapp/
python webapp.py
am start --user 0 -n your-browser-activity-name
```

CD to your webapp directory where webapp.py is located. I am using via browser so the activity name is `mark.via.gp/mark.via.Shell` . You can check your broswer's activity name using any activity monitor program.

### Limitation

This program does not require any background server. You can not set any cookie to save app state and you can not access local files and folder from app. 

TODO: Codes need to be polished and need to make more user friendly.


