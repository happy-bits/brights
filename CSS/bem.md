# BEM

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular **naming convention** for classes in HTML and CSS. Developed by the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

In this CSS methodology a **block** is a **top-level** abstraction of a new component, for example a button: .button { }. This block should be thought of as a parent. **Child** items, or **elements**, can be placed inside and these are denoted by two underscores following the name of the block like .button__price { }. Finally, **modifiers** can manipulate the block so that we can **theme** or style that particular component without inflicting changes on a completely unrelated module. 

Another smart part of BEM is that everything is a class and **nothing is nested**. That makes CSS specificity very flat and low, which is a good idea. It means you won’t end up fighting with yourself over specificity.

# Structure

block__element--modifier

# Examples

    accordion 
    accordion__title
    accordion__copy
    accordion__copy--open

    button
    button__price
    button__price--big
    button--orange
    button--big

# More examples

    menu
    menu_trigger
    menu_trigger--active
    menu__row
    menu__list
    menu__link
    menu__dropdown
    menu__col
    menu__social-link

    hero__text

    header
    header__title
    container
    checkbox
    checkbox__caption
    input
    list__item


# Modifiers

Examples of modifiers

    --disabled
    --highlighted
    --checked
    --fixed
    --size-big
    --color-yellow
    --small
    --big
    --success
    --danger
    --opened
    --closed
    --active

# Note

You can combine this with styling for element like

    body
    h1
    h2
    p

# Reference

https://css-tricks.com/bem-101/    

2016-03