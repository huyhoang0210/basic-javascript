function linearSearch(arr, item) {
    arr.forEach(element => {
        if (element === item) {
            return 'yes';
        }
    });
}

// var array = [23, 45, 16, 37, 3, 99, 22];
// var result = linearSearch([23, 45, 16, 37, 3, 99, 22], 16);
