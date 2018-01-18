function printChessBoard(size) {
    for (var lines = 0; lines < size; lines++) {
        var str = "";
        for (var chars = 0; chars < size; chars++) {
            if ((lines + chars) % 2 === 0) {
                str += " ";
            } else {
                str += "#";
            }
        }
        console.log(str + "\n");
    }
}