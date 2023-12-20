function createCard(title, cName, views, monthsOld, duration, thumbnail, videolink) {

    // Creating Parent Card Div
    const div = document.createElement("div");
    div.classList.add("card");

    // Creating Image div in which image and duration go
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");

    // Creating Image Element
    const imageElement = document.createElement("img");
    imageElement.src = thumbnail;
    imageElement.alt = "Thumbnail";

    // Creating Duration Element
    const durationSpan = document.createElement("span");
    durationSpan.classList.add('duration-span');
    durationSpan.innerHTML = duration;

    // Creating div for content information
    const contentDiv = document.createElement("div");
    contentDiv.classList.add('content-div')

    // Creating div for title container
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container")
    titleContainer.innerHTML = title;

    // Creating div for byline container
    const byLineContainer = document.createElement("div");
    byLineContainer.classList.add("by-line-container");

    // Creating span for cName
    const cNameSpan = document.createElement("span");
    cNameSpan.innerHTML = cName;

    // Creating span for dot
    const dotSpan = document.createElement("span");
    dotSpan.classList.add("dot-span");
    dotSpan.innerHTML = "•";

    // Creating span for views
    const viewSpan = document.createElement('span');
    viewSpan.classList.add('view-span')
    if (views > 999) {
        viewSpan.innerHTML = `${Math.floor(views / 1000)}K views`;
    } else {
        viewSpan.innerHTML = `${views} views`;
    }

    // Creating span for monthsOld
    const monthsOldSpan = document.createElement("span");
    monthsOldSpan.classList.add('months-old-span');
    monthsOldSpan.innerHTML = `${monthsOld} months old`;

    // Creating anchor tags as parent div for card div
    const aTag = document.createElement("a");
    aTag.href = videolink;
    aTag.target = "_blank";
    aTag.classList.add('a-tag');

    // Inserting things
    document.querySelectorAll('.container')[document.querySelectorAll('.container').length - 1].append(div);
    document.querySelectorAll('.card')[document.querySelectorAll('.card').length - 1].append(imageDiv);
    document.querySelectorAll('.card')[document.querySelectorAll('.card').length - 1].append(contentDiv);
    document.querySelectorAll('.image-div')[document.querySelectorAll('.image-div').length - 1].append(imageElement);
    document.querySelectorAll('.image-div')[document.querySelectorAll('.image-div').length - 1].append(durationSpan);
    document.querySelectorAll('.content-div')[document.querySelectorAll('.content-div').length - 1].append(titleContainer);
    document.querySelectorAll('.content-div')[document.querySelectorAll('.content-div').length - 1].append(byLineContainer);
    document.querySelectorAll('.by-line-container')[document.querySelectorAll('.by-line-container').length - 1].append(cNameSpan);
    document.querySelectorAll('.by-line-container')[document.querySelectorAll('.by-line-container').length - 1].append(dotSpan);
    document.querySelectorAll('.by-line-container')[document.querySelectorAll('.by-line-container').length - 1].append(viewSpan);
    document.querySelectorAll('.by-line-container')[document.querySelectorAll('.by-line-container').length - 1].append(dotSpan.cloneNode(true));
    document.querySelectorAll('.by-line-container')[document.querySelectorAll('.by-line-container').length - 1].append(monthsOldSpan);
    document.querySelectorAll('.card')[document.querySelectorAll('.card').length -1].append(aTag);

}

createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=1&pp=iAQB");

createCard("JavaScript Callbacks & Promises | Sigma Web Development Course - Tutorial #75", "CodeWithHarry", 654555, 7, "30:00", "https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpBpWivpwlCic9DH-isIEpXNQniA","https://www.youtube.com/watch?v=9JaDBYPmiJ0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=75&pp=iAQB");
