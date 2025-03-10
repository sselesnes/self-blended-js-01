function parent() {
  someElement.addEventListener("click", event => {
    console.log("event.target: ", event.target);
    console.log("event.currentTarget: ", event.currentTarget);
  });
}
