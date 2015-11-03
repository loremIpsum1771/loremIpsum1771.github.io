


function transformObj() {
    
    this.identity = function () {
        this.m =  [1, 0, 0, 0, /* row 1*/
                   0, 1, 0, 0, /*row 2*/
                   0, 0, 1, 0, /*row 3*/
                   0, 0, 0, 1];/*row 4*/
    }
    this.multiply = function(a,b){
        var m = [];

        //First row
        var _b0 = b[0], _b1 = b[1], _b2 = b[2], _b3 = b[3];
        m[0] = a[0] * _b0 + a[4] * _b1 + a[8] * _b2 + a[12] * _b3;
        m[1] = a[0 + 1] * _b0 + a[4 + 1] * _b1 + a[8 + 1] * _b2 + a[12 + 1] * _b3;
        m[2] = a[0 + 2] * _b0 + a[4 + 2] * _b1 + a[8 + 2] * _b2 + a[12 + 2] * _b3;
        m[3] = a[0 + 3] * _b0 + a[4 + 3] * _b1 + a[8 + 3] * _b2 + a[12 + 3] * _b3;

        //Second row
        _b0 = b[4], _b1 = b[5], _b2 = b[6], _b3 = b[7];
        m[4] = a[0] * _b0 + a[4] * _b1 + a[8] * _b2 + a[12] * _b3;
        m[5] = a[0 + 1] * _b0 + a[4 + 1] * _b1 + a[8 + 1] * _b2 + a[12 + 1] * _b3;
        m[6] = a[0 + 2] * _b0 + a[4 + 2] * _b1 + a[8 + 2] * _b2 + a[12 + 2] * _b3;
        m[7] = a[0 + 3] * _b0 + a[4 + 3] * _b1 + a[8 + 3] * _b2 + a[12 + 3] * _b3;

        //Third Row
        _b0 = b[8], _b1 = b[9], _b2 = b[10], _b3 = b[11];
        m[8] = a[0] * _b0 + a[4] * _b1 + a[8] * _b2 + a[12] * _b3;
        m[9] = a[0 + 1] * _b0 + a[4 + 1] * _b1 + a[8 + 1] * _b2 + a[12 + 1] * _b3;
        m[10] = a[0 + 2] * _b0 + a[4 + 2] * _b1 + a[8 + 2] * _b2 + a[12 + 2] * _b3;
        m[11] = a[0 + 3] * _b0 + a[4 + 3] * _b1 + a[8 + 3] * _b2 + a[12 + 3] * _b3;

        //Fourth Row
        _b0 = b[12], _b1 = b[13], _b2 = b[14], _b3 = b[15];
        m[12] = a[0] * _b0 + a[4] * _b1 + a[8] * _b2 + a[12] * _b3;
        m[13] = a[0 + 1] * _b0 + a[4 + 1] * _b1 + a[8 + 1] * _b2 + a[12 + 1] * _b3;
        m[14] = a[0 + 2] * _b0 + a[4 + 2] * _b1 + a[8 + 2] * _b2 + a[12 + 2] * _b3;
        m[15] = a[0 + 3] * _b0 + a[4 + 3] * _b1 + a[8 + 3] * _b2 + a[12 + 3] * _b3;
        return m;
    }
    this.translate = function (a,b,c) {
        var t = [1, 0, 0, 0,
            /**/ 0, 1, 0, 0,
            /**/ 0, 0, 1, 0,
            /**/ a, b, c, 1];
        this.m = this.multiply(t, this.m);
    }
    this.rotateX = function (rad) {
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var rx = [1, 0, 0, 0, /**/
                  0, c, s, 0, /**/
                  0, -s, c, 0, /**/
                  0, 0, 0, 1];
        this.m = this.multiply(rx, this.m);
    }
    this.rotateY = function (rad) {
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var ry = [c, 0, -s, 0, /**/
                  0, 1, 0, 0, /**/
                  s, 0, c, 0, /**/
                  0, 0, 0, 1]
        this.m = this.multiply(ry, this.m);
    }
    this.rotateZ = function (rad) {
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var rz = [c, s, 0, 0, /**/
                  -s, c, 0, 0, /**/
                  0, 0, 1, 0, /**/
                  0, 0, 0, 1]
        this.m = this.multiply(rz, this.m);
    }
   this.scale = function (a,b,c) {
       b = b || a; c = c || a;
       var scale = [a, 0, 0, 0, /**/
                    0, b, 0, 0, /**/
                    0, 0, c, 0, /**/
                    0, 0, 0, 1];
       this.m = this.multiply(scale, this.m);
   }
   this.transform = function (p) {
       return [this.m[0] * p[0] + this.m[4] * p[1] + this.m[8] * p[2] + this.m[12],
             this.m[1] * p[0] + this.m[5] * p[1] + this.m[9] * p[2] + this.m[13],
             this.m[2] * p[0] + this.m[6] * p[1] + this.m[10] * p[2] + this.m[14]];
      return p;
   }
};

var m = new transformObj();

