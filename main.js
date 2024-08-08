//sidebar
const menuItems = document.querySelectorAll('.menu_item');
//messages
const messageNotification = document.querySelector('#Messages_notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message_search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.theme_customization');

const fontSizes = document.querySelectorAll('.choose_size span');
var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose_color span');


const Bg1 = document.querySelector('.bg_1');
const Bg2 = document.querySelector('.bg_2');
const Bg3 = document.querySelector('.bg_3');




// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        // display notification popup
        if (item.id != 'notifications') {
            document.querySelector('.notifications_popup').style.display = 'none';
        } else {
            document.querySelector('.notifications_popup').style.display = 'block';
            //remove notification count
            document.querySelector('.notification_count').style.display = 'none';
        }
    })
})
//Messages highlight message card when message menu is clicked
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification_count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'

    }, 2000)
})


//search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        // console.log(val);
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}


messageSearch.addEventListener('keyup', searchMessage);


//Theme Customization
//open model
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('theme_customization')) {
        themeModal.style.display = 'none';
    }

}



//close model
themeModal.addEventListener('click', closeThemeModal);
//open model
theme.addEventListener('click', openThemeModal);

//remove active class from spans and font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');

    })
}




//Font Sizes
fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');


        if (size.classList.contains('font_size_1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font_size_2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '-7rem')

        } else if (size.classList.contains('font_size_3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem')
            root.style.setProperty('----sticky-top-right', '-17rem')

        } else if (size.classList.contains('font_size_4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem')
            root.style.setProperty('----sticky-top-right', '-25rem')


        } else if (size.classList.contains('font_size_5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem')
            root.style.setProperty('----sticky-top-right', '-35rem')
        }


        //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;

    })



})
//remove active class
const changeActiveColor = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


//changing theme colors 
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        changeActiveColor();
        let primaryHue;

        if (color.classList.contains('color_1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color_2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color_3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color_4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color_5')) {
            primaryHue = 202;
        }
        color.classList.add('active');


        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


//theme background values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;



// changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
} 

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload();
})


Bg2.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();

})
Bg3.addEventListener('click', () => {
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';

    // add active class
    Bg3.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

})


