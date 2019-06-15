/*
｜2019-04-13
//File Select
//Made By XFY9326
文件选择器由XFY9326制作
*/

var Base="iVBORw0KGgoAAAANSUhEUgAAAJMAAACUCAYAAACX4ButAAAAAXNSR0IArs4c6QAAAARzQklUCAgI\nCHwIZIgAABKqSURBVHic7d17eJTVncDx7++8kwkB8Q4IM0ERkswQkiCkbrVrvdHr2q1tFW3Vamu9\nFGutrmvdqqurT1uqtfa2a1HU2mqp9KJWq91ql7UXewvCzBAyEyJYMolSrwhIEuY9v/1jZsIk5jIT\nQoLu+TzPPOQ97znnPTNzeN/znnPeM+A4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4\njuM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4b2ECMKOpaSL7B48t3NFZ\nlVyFLPb3JPM5Gzbs/4buPDq/bdBt6eqGP+9JnqUIt8TrBJme37b4z3VE57eWkscRm9Yc6HcFet+D\n76ntrK5/cjTLOZ7C69dU2YB3eH7b+GxJR+sTI8krACCTAmGxPFG4Y8r62skvwvY9KWi37a4xWpCv\nyhpgwZ7kWQoVvQY4Y3eA+QbwL6XkYXtknor+d37bWHqA8tEq47gzgQuM1X/Nb4qwksLPrJSsRq1Q\nzv97rjI5o8ZVJmfUuMrkjBpXmZxRExjvAgCEU2uPxve+g1GvmPgickt7Td0De7tcpQon4w8ClaWn\nVFXh6o6aht8Me4yWxKWInjuC4gHQ7XsnvFhbO/K7dF3phZLR+0S0qk+wys/GvTJVpmLHqS+PYnT/\nYtOor/dXtsQr2qP139+LRRsBqYW+H3KR6RDlsVAyfnZHpP4ng8WqTCY+rei3yPUPjsTkCTu9F0ea\nGAilIteL6Jl9AoW28rLu/xrXy1woue5EVX0MQ9EVCQCDp8Ldlan4JXupaOMhKJYV4VT8goF2hlpi\n5yp6J3tQkfZUKLnuRLF8qW+o7bK+nrFxduPWcatMoZbEKULmMTD7jTALUeU74WTsslEt2HgyeCjL\nwsn4FwuDQ8nYaSKynHFs485KJKYJ9n4MfZsiYj7fObfhGRjPNpPR5aiZsDtA14rKS8UkVbHzwBwG\nCMhtlclYT3uk4fa9VNKiiXKHCoeOMPnngElkzzxLQy3x33ZE6/84M7X2H63KCnZ/V8+j3DDSMlZ0\nVewsOZGqySQT9wHT+wbLjzsidXfmt8etMolFCk/Yasy16eq6XxaTNpyM3wecVZDV+4Fxr0zt0bqv\njzRtKBU/T5RJvQGS/Y/mW5ktUvA9Ka+mo/V3jPQ46RGkCScT16uwqF9wa7eUXVgYUHJlqkzFjlOV\n3xaGqdVjOuY2/GkE5RxTAuVHbFpzYClpMt0y0svw20Ioue5ErL2mT0vNslM9s/ilmsi2wrglVyZV\nXdq/DShGlgInjKSwY0q4JNPtvZ0a7XvVrERi2q4B2kkq+tmOmnmx/vFLatCFW2IfA3PsALuOn9Ea\n738adN7KVE0moG9qJ4Es74g23DtQkuIrk670VOSmwXYbq19FddxuW53RFU7G//3N7SSbsNu7B717\nLvoyF05GzkeIFmT8ApiD6J3bI42hVPxjHfDTkkr9NjStLTa1LCO3SgnznlTtAfvU6JbKkr7tJLtN\nhdM6GxvfGCxJUZUp3P50Bdu5ru/BzPUq0iDoknyQIF9m1aqHOPHETKllHwsK96B2aSlpDLJQRX5U\nbPwjNq050O+WxxUWaEml24cq0kCMt6QjUjfkLNWiKpPs2O9KFcK7A2ibtr3nnpcmTjzUJ/MpDBW5\nPdXhGQefl4blIy/1XqS8Wuq03ZmptVOLvXof+WzTAT3d5gnGcDbpmFDuTEfr7hsu2rCVaUaq6VD1\nubLPfxzL9asbG3cBz4dT8eUol+4+sPxHuP3p+9OVx5bUOSZWHw0n46Uk2Z1Wdc2IEo6iabHYpJ5d\n8gjQON5lGXVCNaqCyJAn22Erk9Gy6/qNna1LR+p+nN/w/MBXfZM5H5iYC5oh2ycvAW4dSblLlAGu\nTUcbvjYGxxpSWbk8ChxXEPQjoL2ELPI94Pui40PJ+Cc7YMC7uLwhK9MRLWuOyCAXFYYJeg0iNr/9\nt7lzn69Mxu9Q+EI+TEWvmRmP311am6FU9hUVWVzMtI0xcnSfLeWOdLT+qWITv6kHfLwZ+lxZRM3X\nZ6SaftlZ0zjokNeQrb6M8b5C3zuSv7bX1D/SP57ne18DClv5B/lBLi+u1COSssix+1BFehuSG/ts\nGj1UNHjzUCkGPTOVedqA9n3kRdGrB7puPldb+0IoFbtdVHofIxK4wlr9ixTZ86RGTukocmzO2fvS\nNfPurkwmzizsaxI4L5SM3dcRafifgdIMemYyZG7ut/83g2UCkPG4GdhREDRJjF5TfPGdfYqIqvpL\nsH0udyLI7Uds2jRhoCRDXOb6Dpuo1WuHOvaWOQ1/B/6zT6DyzmGK7OzD0nOP2jDAqEd1pmf7FweK\nX2xP2UPFzApQLbsZa7cNF8956+h44aVbBJ7pE6j6b9NbE9H+cYupTFbF3FDUgaPRl8WT7xZVSuet\n4cQTMyAXYSlcd6Lcs3p7/7HYYirTjwaabjAYa4O3Ynm92PjOvq89Utekwrf6BR8fao2fUxgwXKfl\nLvHkhlIO3BGNvhxKxr8tMGQbqz+xHDazNX5kKWny3rDBF1+KRMb18qrCNtHejlswckIoGZ9abHpR\nChu1O4ynm7M7pO/AqiE40s8JYHNV3XOF/YTF0h0910lF8FQ8eo8tyjcO2/DM4y9ULXgRhqlMgt7V\nXlX/bKkHLiv3b81NQjto0EhGr0FlGb1nR11uS36LWeXafR7D9M7ubSL6YVSf7H1AQvWGEc3Hsfhi\nOKu9qu5ZgI6aup9WpuLfU+TibL7MsUrJ30nekRtXH7gRtpaarrOx8Y1QMnaBIE/SOztSDgn4gaXA\n+TDkZc52WY8vj6TAz8066jVUvz1UnHRNw3JRPZvskMhbXrq64c/WmI8A3XuQjYqRC9sj9Q/3hoho\ne039EpBxHzzPdQ3d3y/4U6Fk7CQYsjLJdzuqGkYy/xyAYHDXbWBfGSpOe7RhhcIngF0jPc6+pLO6\n/klEPt6vsVo0Vb22PVJ395t2iGi6puVisuN940q17Asofy8I6u17GqQy2e27AtyyJwfdOLtxq2C+\nOVy8jkj9T9TIR8B27cnx9hXpmroHRfgMUNLQpMCyjmjDVwaPsNhP1yQ/KbByT8u4Jzqi0ZcR6b9g\nWnWmZ9tV2WufrvRmJiK9MwPeCAYzo9KgXbUqMPOQQybnN4MVFX5bVdWAd3pTmpv3q/D9spEcZrLn\n7Wiure3pHx5uf7piQteUwjy726qqSrsM6UpvTttRvQOwr/m+FvPZHPls0wGZHcGiZ7xtrqvbWlTD\nuN93VarNdXWvFQ6JhdufrjCv7tfb+O9W7dnS0LBj4NS7zYzH+7SHgxUVe7RkpeM4juM4juM4juM4\njuO8Zc3ZsKGcVaveNEA9LRabNLMlvnD6+vWHD5TO2fvG55nkVasClcn4ynAq/gGAmesT76lsiff5\n7ZZwMv7DUDL+MKq9ZQy3JD7atasrXTn94Asg+wNCM1rjiw5PxmaVTdBaKzR5xr92YVNT2YzW+KJQ\ny9rqsX1jo6zgvb8VjMvKceHph3xZ4XR8Tgin4g+q2rWKLAqlYicblVOmbu+5agv2VIQ/Fg4xKP46\nMeZg9eVKVJeZlrUhLE/4IteD/iof7/nJHGAsT4iYb8LAj1yFU/HvoBwDgNCarqn/xJviJOM/AWYB\niPLd9mj99yuT8dsUjgNVRE9N18zvADiiufmwjNiHMerlnpkb0epuoVTiHPH5HEbnkUoESMbiCl8c\n6mGOUGrtr0XNwYVhamVnx9y64wZLszeMeWUKpeKXo1wFth3P3IRyh4XLBUCpUzh3y6Tyh0H3k4yt\nrEzGVyrsyg1wnqWwVQwbK1OJH6sx+RH2xah5d/ZPPVk0eNewBVGpAl2Y/ZuFoZa1NxSuQzC9NRHF\n6mn5bZv7qTHx7XL1zCUgZdn3wWUAGePfiHA00BkM9oxsjXJd6UlKf4ChB7UtqBfC0CjwSHj9mvnp\nuUdtGCiZWNOA0GcinhgddnxttI3paXRaLDZJfPkS8Kq1cqqobsnukUMK/1WTWzTdMxGF08F+VCH3\nNwepsEjhdEUm47ORDBX4zMJnIz4qPvPw2Qi8PHyp9G8AYryPF4YG1GanpPadbsHm2vnNouTmueuF\nlclnZkxvTUQRPgUgsGTj7MaSJ5/liXLbrm49OB2dP39C2YTZ2aWLmIgxHxwurfW9w9OResm9xnz5\nxDE9M21paNhRmYx/xlrdYozcolAGkJ/iK3Atlp1iWIzQJphPqNq/oPI1a3jYKKA8psJiVOYYYZMY\nXTzoARVqm5uDA80o2E1+DxwOejaqNyKiqBpNJc4CVEQ3KNLnf315oOKGLn/nmWCmK3K55+tssouY\nPtRnYluBUEviFLH6LTwyu7p1QX5kPpyMP45PtXpyS4fUfa8drsinaauqej20PtEmRg9DpGKgfPcl\nY97Aa4/UPyzGHA2chOiLpoeDC18q+llgIr4ciO/vBBAjawV5B7BURMoFFoj4p4JeZYWmoV47TM+M\nYYr0OPAGypxQS/wfAMLJde8GZoL+70AJ2qqqXke5Mrsl5yN8CGu3qaeXDhQfoFvKnkKYDlQHKswJ\nkG1nAe/DY5Zn9Nf900xri00VowsARGXYX98UL3NzOJn4aSgZ+0Jtc3NwuPijbcwrU6glfgzozUAG\n5U4b5JXCl1i9GmUNRg9RT44BsJhNanPzntVWAWGUlBVdhnIRykUqNnc3KLfkw1Au2i4VQ17qRNgB\n+rPs33J2NtCeDaBi7lGVAc/e6UjdCqCV7Dz3gIhZPtTM1JcikW14+jiAqL4fwPf8D5CdT/37zdX1\nGwvjL2xqKivLyAPARCwPt0fqmoZ6HwCCnAH6MUFu2+rZX4z1spBjWplCLS2HYHiQ7GIYPV2U/8Ea\n3lP4okzOM9aeAwgZewXQneny24LWbARQI1VAJcasF2vmCpwucLqomQcg2GPzYRh9X1GT/DTXkFc5\nY0pz834gp2F5PdNlfz5Ykpkt6xYB1eQeiVc4q/+EsTcdRk22Ya78Uy7oA2QL/cO+EVd6L0wq/wFw\nAkIz6n16qHzF6GnqaaX1vcNRcgtO6PtCycSYPlE9ppXpQGu3iVJO7iGClyKRbWLlBKOcvvulZVN2\nZlqBrXgmAjy1paFhx3Nz524BdmCZDxwkynrQGhUWaXatzenA82rlnSp2gSrvQjm+mHKlI/OewvrP\nYvTQoGevBg7AyMrBZhxOi8UmWaPLAFD9OkIbwlQN8tWhjqPbux8Fux2YNb01EVXsyWC7AkF/94/v\n6EovnIrcm/uxm5Ro5r3p2tqh59LXNPyuo6oh3Vlbuzkdrb9ehdyNjY5pP9uYVqbm2toeEbkY6G0f\nCHoOyinqy1yUCy0mmluVLrsiisqj2Yiigq4l93MSqrI+n4e1+s8Axsq5GH0NZCmGp4sumIiK8e4F\nEKtXAFjk+4NFDwblJmAWlhcnBCZ+Q9DrABQuyF7GB9bZ2PgGYh4BCFi9DMzBYB59btZRr2Xf60qv\nMhm9GzgL3yaFzEntkQWdhXnUNjcHZ6yPLVjY1FQG2RGBwoUkZrQlKkWzj5gZ9IWiP4NRMPYN8Jq6\nBxDdPdfZykSEn2uQbKehMieUjJ0G+q7stp6cv/ZLj3xIRLOr1ol+Xvr1rewJ6+k9WPzc+pytnTW1\nA1bGytS6d6jy+WwZuLGtqur19ur6B4DVgBGxy/Jf9EBEs+VXy8ezWWjvJa6yteYiFf1kLmKZEvhF\nOBlvCifjTeGWxKUAW43/c2Nk9ZbJwXsBurq7KzNd2/4WakmsCCfjd5keXQ0EgdT+tmzVHn8wJRjf\nnwhrWVuN0UOx0qo9Xr4sV4mVH4AcjmUnhg+HUom7Qsn4TTbIK6qSX2nleCsM1TFXUuOzo6ohjeE3\nuZT3DLh+46pVAbV2WW7F/k0HWC/byy2iqOTu7kzdC/uVDforCPv7gV+BfSW7tKO+nN3OUpXehy8w\n3mxgYe9LNJQrW7Z/NzfUYidoN0J57rL4aQxTgN8ZwweH7hIZfeOyCHw4FXsElZPIXu4+aH2vSgKZ\nKlF5UsU+IWrehdoN1pgzjdo/gPdXUXuvChco5mmUP6np/pOxwRsQLrFWFxojq42V91pjVwDbQaag\nbE9H66eNx3vcW+Zs2FDe7XfVTd3eHcs1B6htbg5uY1eVBgITNSPPDtfG2lvGZWxOVNpADxLRW31r\nftVZW7sZ1fZwKnF2R3XDisrW+MVgH+qsmd85Y33sPcbTw9ojDY8BKwrzCSfj7cBqW+a3BzQw207a\n9ry/7cCFAclcpqLvFMzPxuP97U25R7WaCldezZ2BmsepSI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7j\nOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOOPq/wDJ\ndEWqmwk0wAAAAABJRU5ErkJggg==\n";
var wh="iVBORw0KGgoAAAANSUhEUgAAAFIAAABTCAYAAAAMcFA+AAAAAXNSR0IArs4c6QAAAARzQklUCAgI\nCHwIZIgAABtzSURBVHic7Z15fJXVtfe/az8nE0mYk2CKmDnAAQGjrYogII59qRXFVkXLYG2r4FVr\ne621Lb1aLGr11rdqta1S1Falfattr7MGq2hRqAYMkJBJQCCDYMhAhvPs9f5xpifDCQmT3s+nv3/y\n7LX3XnvtdZ5nD2utvQP/xr/xeYJ81gL0BfWXxjcE9mXTSar16VBcTTHC9rSK6f/6rGXrjs+NInVG\nsa9uR8IXBZ2J6JdAxoJmA77uZQXmp1Wc8eRnIGZM9BDyWEKL1sc1NB44T+GqPTvlPEdsiie3r5pT\ngX8rsjb7nxnGdN60p7FloYOTBuD0v/oOa3j4aMl2qDimn3ZDwdtfsNbeAiwGknotZGnB2LWipkSF\nMgzlBNw9Eue0GNfXPKLi1P3HUub+4pgoUovWxzV8euD6gMgyB1K651v42FF9UlX+lpY07F0p9Xcc\nC7mOJI66Iutz3yxSkceAid2y1CrPi8j96RUfvyZc6sbiUZc7Ps9xA0XWmHGojrOQ5cAQFwYDiQA+\n2KfQAXwsaKVFKhC72Wc71w6rqfn06PUwiKOqyLrct5Yg3AMkdGv1L6i5Pb3i9Pd7q7ctLy9huOvM\nUdEvozILGHMYYligFCi22D+nVW97S4K0I4rDUuRtebW5FvK2VaS/uhqJvFHVWcWJyb643wOXdqmg\nlKmjSzLKp73aG7/6E8adJI79pqt8zYFhhyNbLLiw04c+HXB5MGN7edWR4nvIirw1v/ZsVP4GJAj6\nm59VZFwDsDdn/ZCAafsrMN1TXEHuaqTxJ/kVF7R35/XJCWNPs47+SJTz+2hSFWoQtgJlojSA7Fdo\nBzBik1UlWeEEEXKBApQv9MHPVfgzwt1pVWXrB6yAbjgkRd6SW19kJFAMTmqI9OHyivSJe3LXphvR\nl4FJEWlx6x01V6VXTnuxO5/aMQU5Psfcr+iXe29JK0CeR3ndmM41w6uqGgci594c/xirgekKMxS+\namBEb42I6lP47PdHVFTsHAh/LwasyFsKanOMlbeBjLAgiMy/0ZT9TV2KgaJwWRfK8TnnHrf1tJou\nkvv98Z+0ujeD3kb3ZZClWYz8UYz+flhl2dvS98q8C/b/vy8WqJgHRXHUsBYrbwUS7dsjLli3X4uK\n4hr27T8HNVeK5WJMjzV0C8rtI2rK7hGIOfHFwoAUeU2Rxo1sbHgT9Ese8i0/S6i/r779k7+BOcdD\n32BVLhhVObWuO5+G7MIngCu6kRuBX8V3yH2DP976yUDkCmP/X05dCXyjGzkAvKLoHzqM77m0C9c2\n7csam+WK3ghcDQzqVv4Ncdz5A307zUAKj2ysu7OLEpVfLq9IX1HXvvdX3ZT4gc8mntWbEkMVZ3sS\nVoSHfW589sjqstsOVYkhvrt6IfqA8wV5PNG6exqfPfUhuW+4M7K67D/EBMYqPN2t/Jmu63zwSVbh\neQNpud9v5G0FtbOtlZcjdZQ3t1WmzXwgd+0lCE95ilYR6JyaXjNzTyxe9VljvyWi9yJsNcL1wyvL\n1g5E6FjQh4vimjLivqHK2QJnAJkxiroKf8LVHw25ZN22+qyxZ4roSiArUsISEIdrRlSVPdaftvul\nyGV+je9ory0BMzYk8j5x3Sn/IdviXcMGJzTpuLhNPmtOTquaVt4fvkcbjc+dlidW5yp6mSCTu+e7\n2HZHzS9ak1uXJ3xrf1xAEh6Wrks2BbltZPXW5Qdrq1+K/EFu7c0icneUvVy2vDLtqbq8t14AIp+A\nIldmVEx9oj88jzWa/nqKXwPODa7YKx1MQrfsj8SYq1IvfPsf9dljvyvoXXiGPUVuTqve+ou++B9U\nkT8Yu3OEDThVDs7gIFPW3FmRPrM+d+3XVfSPnqK/S6844+oB9O0zQctzUzOttd9X9Dq6Wr9cQX+a\n0jlm+Se3bLoQ1ScJbT8BFfjmiOqy38Xie/DJJpBwXViJQEDULt2VuX6Qinp/obr4Dv3eAPv0mSD5\nwrW7Ui965wZx3MkoxZ4sR5H/aorf8Xf781Evq9hLgM5Qnqjl1/VZY2fE4tunIpdl7hokBJaE04o+\nvbxy1Ie+5APfxDuQK98fun3avkPp2GeF1K+8Vzp47j9nqcg3BFojGcp5iXHtxYn3pL2nIgsI78sN\nPhH7VP0J447rjV+fimxPiruCkOE12Ib8Qv2l8arcHKa1ESgp8j36Csw4qkbi0aPn9W6/PEwM+eo7\nq0Tt6S54Jkg9WcWuHXTfiDUoP4jSJUOMrtJe9NanIkV0vifx2s8r0t+v7/j0CkFGA3Tgcofv7TfF\nx88zx+XMOMw+xRRj9ISr5zIk9ceZ4xaeBMho/+LhB5O9b8xzRvsXDy+6piju4fWZg1Lmvlsicb5T\nFd7yFMoLuPbl+J8O+R3w1yhZZzdkjZ3enWNMYX6Y+8nxBNdiwepqfw+A1YVh2j5t2faCUzlZYb7P\ncCn+efGH3rneMdq/eJjBfldEvucz5mvHj7/6JhF9aLR/wTkHr90rzPETUm5JSulcNWOa7O5MSNz3\n603Zi4f+n7f2tfg6zwX+Hi4oon6GmOeSpqR8G6USwIUONfJxD6axWgsNtuH8A65jnt099p0sJKrc\nRgk8geATEVHRrGEHYrgPDgNGA8epymgBR4VUxP5AYJ6IufTgtXtitH/eUJDvtDX7LqjZOHyEA/GK\nPPzQhzkXZ87Z0Jra2XSxoC9FKihT3SvjbnclbqooNwg6O71qy7YecsZqUNBZnsSLd5WlNTluYD7R\nJVOgvKPhCVENbelMhi8p+Ygr0hUnnbB7QnW3iIwAEVRGHgo/xyYkCJIsItK6Py5snHBQnnxoU94M\nubS0o8345oF4TWuLE+9LPXdETdkv06vL3+yNb6+KXIYa9XzWwBvBP3JulKSvLdq+qEZF6wAEMpI6\nTXcDwGHDUTtSRFNQ2lGNGBIUPWzr/q6q1DcIGjUAElzsn3+1OfuEtAvXNvl8fBWI2ArE1Qcbnzst\nLxavXhV5oKBuIjA0nLbKP3Zlrh+k6n4xwhh5CbCqpgZA0ZHikyGH07HeoJgxIPEqtFg1MYwgh4a9\nu5J3qMp14bQDwx0rjy8rnuEbNOedj0XtZYRNaoZkY/XBWLx6VaSjxu9JtlVWpG10BnVME5zIZKIi\nxaGHKgBBHCt27OF0LAZCb4G2GKu1R5r5tSdWPqLw6whBmZaetv1HAKlz330dlfuiWZzd9OypX+uN\nT+9jpJIffZTK1YgruN5N/6dp207fCGCtW+Upe+Ih9ic2jOYCCLS4gSOvSICkFHujWD4Ip61yywOb\nThgH0JrcskxgeyQvwN36/Pnd9+q9K1Ig1/McnKFUPG+b3SKIBeh0tIqQFduIdHe5HjYEyQNQlYbO\n/c1HZfe0MLumzTXu5W7QnYsD8QbnfoBR525sUdXrI/I4HN/ctm9hdx69KlLRUZGE6I7gXzyKlK3h\np/rSlnpVGgBUe/iue8I/L370+MVfzPRfdVAX68jCRalocCsqsDU5OTlwsDqHiusmfrTFEe71kGY/\nuDH3qwCD5657DiFqMxV+oM/4u6yZYy1/otEQSnPoydNxqYg+r3bBfhBqIHO0f97wPuSV40m52Bh9\nyMG3YuS4+b3uW8NIjtOJiCQAWNGNfZU9Ekh2W+7AZUdEWNHbws+KLo8+M6Y5PvUib90Yb2QXRbYA\nhKIaQiTp9omZdwEEfGqTC2IJmpk5J0mQy1WZAlw4yCSc3FfHrJVTI4nA0VfkVZNqWzDyMw+p6KEP\ns84FGHzhuhdQIjIoLPDWjTVGRgwQKriKGqerk6jJW96FdRGGDuNjCRoYnpGKMFVEhKCt7yt9dUyM\nCfuHtKm1/agrEqAzSVYGlN0RgpqbIbgFUNFHo3TOaX32lOPDSQOQt6D22ryFdbV5C+v+mrd0WwLY\nlnABUR20O3NDIh6lG2wX/3I8Ce+patBtamVcLCETrL0IZFhQMBHQi8hb2mMGjEJPAVBlZ+P2PxwT\nM931+RXtPiP/7SHN+k1J3mgA0xn/B0ITEmA61cwNFwoqR+zPgXRgDs2p5ymmOcJGSMncdXIrwnsh\nSkN8gtPFWVVTurkBpAFADIX0ankvihPDNwEUDS5yRUYcn9A8t2dZGO1fPDwy0Qib+qOEIwVjAo8T\n9W2bTqOXAaRe+mY98Fq4nIg5O/wc+oSd6KesTrpAo8cvnwEghrNcV2b5jKwfUnr63q5Nz7CwvQYk\nTVVGjSxclNJQ9miXzz9z/OQJwJRQKx8qki8wCJEF+Of9mdLVXUL5HGuz1DEGwKr2UKRBko4bt/iE\nfmnGA1fIMKoGib3D/Nb4j3Y/sCnndQNnAwj6deBuABVeiYTWuDpDnz8/QS54oT2kQLcZnCQAEVIU\nrY40I5IPkFZ2RhPwXO9NL1NkcQ1wigiDfWJH0HUcFZ/DHBRRxarK3WK4BpiOypTjJDF3N2zp0mEj\n2YIaQRS1vY2P43wOK2JqIxZUk5CILyYmHPRpRcJv3ORfbRk7Ysm4rZ8Y476sbii+2JDc1PFpEfB2\n+I1sAsKW8FSDbtPw1+nZ5fQlnlitwQiqkhqPbwRQE84cmrVgCKrTQl/8TnEpRkhXYarAYJ/1nUo3\nRYqSRfC1aVelZ9SYkCnQ63atT/TxJnphNa5YJLJsNU6gczrwl5Q5721uevbURmBIUE47AXg7PIFE\njQGqY8R4ze4Mva1wT/ZBG0a3K+oKpKrjdjFxpaT4xiihnZGwbke73WutvCPQoGg8RqZ1c1UYMYwB\nFUX3qjXH3B907YnlVXi2hqBnQnD2Rrr86OMgPEaKbEM1vGbL7wzEveeYgEsoRt4GZBpQ3WfLIrtB\n2hWSBcnwZhnVKSqMAjoV+xY1K9uax1xeNmRwYpWIZCicmeZPS6wvDS7+MzPnJKJkioig1BntbO7R\nnvK+Ve3T1xxD0GFiWCE9Y356QlmLhDYi3l2bUgqE9GXGQ0iRoloemVqEwhVVwxtvzasrAU4CEJHp\nwKq+2jTIHlXbKmKSrGpWV3l0riA+oNGx5k2Axu1/2DfEv/BNRE5DyfLJoNOBlwFk8LAkkOMAVLSu\nJXCgpyJFd+0sbXqqB/0gyJyQkunD3E5/FCmURZ5tdIgTle0qGu5bBoTfSNXNnrEjo/DqPdm6hn9I\nSJHAl+ehjjcqtzusUivGHADEiESMHmMmXj4MGzQIq+pH2zc3RScO13lGHb1ZBBOnviWEFEnATVJf\n3CgBBKnbV0UPRVpFg9vTgSHOnR9Qp4+lqweqbIuoxWH0qpKM5Ksm1bZY0X1hsoQiiw2Ain0Tz3on\n4JrpohLxnCmMys+vi7oeekGbq7WCBhfyKtEJSpOuQkhAVREe8nZ++9bfbhBCM7Jw/hdOvGI0gDoJ\nyWAzQp356FAUdkjQeU5B2cTz88snTwYwGO9wJgdMasiYo5ExW12PIiseO64eZHM408DM+MqRbwCR\nMDlBusczdkFw3SjBrZVoLiwzWVkLEkFDTirZ53Yc+FP3eoL8VhUL+JxAfDBy15gxggn5aWxl/7Rw\n+CgsK79X1DxvrG4oKDvxrIBDlzM9Km4KgBEJR2BgfcSBZ9snoq9HK+hXnlhaEadoZAxS5eu3jqvv\n01oDoYWzysiRhdtHdSTJeFUtCJJ4ZVf5Hxt6VAmY50WoDwrB7NGj5yUZx3qMyFrRo85RgijhuE1j\nrEyPw3bZVGjox1WNekuNywHwKtKyOlpDhmnT4PMdxzxC9ChFgnRqJHylN1gIf6Ym3sfJjsOXRGQw\nSruofaG3Om2ftteh+h6giJlohqUeJxoJwVOjgWOmSJWon0pFWtrbzYEu+VaDmxZvuLbppsjylWlv\nqWcRLWIW3FGWVgbesVK/s8zfGNPeKJ4diIHTUHOGKnHAHutqr0eDa2sfbwWzVlGLcoIG5EQkvJWk\n7qMt7UfU4dUnXFKjCdsUJ4Fkb7bBhOYAhkerBCdCjxlNFPDENuqcggUNY8XInZ4ywzra22+PJUcb\nLVsIRXAZYTrCtFDwwDa7Pz7WWKeua98AaUdIxNHLhKCfRpX3j9VE4y/1x+PgUZw0GcekessIthlA\nhYhb1odWQzd7pKs8ALSFksZK4Hs/Kx/5rnjCOIBv3Zpf1yP6FaC+dHVzcJYFkFOi51zMi7t2PdLa\nWx2Aj52mDULQpSEqF4LEA4joulh1jjQ64hJy8QaXCjU4dHEvWzc4ZirR5Z0l6EXtosialel7FP19\nlCLzCxfVFwp6A1EFO6qsWpZV3fvGP7p9ihPBqGIDrvaYrbugdHWHq/KwBpdI4UWequo7fdY7ghC1\nhV0pvq3WFW9AgDsiPnkXgKCRSVdEeyoSQCx3gxua3iXetXr/HRUZlQiR7ZjAxHYnuVfLiyqbuxBE\nX9m95XcfHawjLXHuYyISWXgruJ3tHLMrF0Tx+vL3lhduaEC6GGyqL/WXdoSE+xsAln1Wnb9AL4qs\n+H1GJZj7oy1wTt7CukviO1vuECiJkIWlP8yvvbh7fUU3E7KWKwTE8mj3Mr3h0w9Wfqqo94zinj0V\ncUf9VGsYKkGjRAjvAyga9ZwKkcCpwXP/eZMo4zuTNGvoRW9XQqxICzE/BesJXdOHV00fki6WeeCG\n11aiKk/8ML+uS6ygUVsN0hEswMc2EOj30Q9VfZ6QKV+Uath3xE+x9gZ/qT9elNPDaVF9XRURb/yT\nSpeTvKlz/7llxAXrIgv2XhVZ9mhaE5gbohQZbkzg8TuK0qoUc52naKIqz92au2dCmOC6pg5hV2i8\ne5PWA92s6X3A1XWo7lJVVdFSWN3v43MDg3bh2xkXPx2iM7Yorz+wOW88QfdLkIZd0xfHmGF9FY+l\n/wn4bYQgTM9Nqb/3zoqMx0GWeYoOxZiHIqkm3w61+oDAn9W6j+zcubrLorYv+NrYpmLuQuUZRP5I\nt3PVNcktkbT0YUDpC63Gp4R9SqJBfupGI5PRTzJqh693rJ4VprjQMci2vt0X3z7DhwPashTvuAjX\n5y2qu2V5RdpPUY1e0KGR6H927Xqktbmt6bedVm7esblmQLNuTc3Ktg7TvsqVzu/vsPv/2aNA6epO\nCJq2jGjpQHiHkdDY0qhIQ2gcryhaXzRIAuJ1wD29ZuaaAHBZmOCzrL1qUm1LD2Ye9BlAX7Myuy3n\nqvpLjehaDEGrt7I8f1Htp9seTb8uL6++RtCJBn7srbevanUjwUOaA0btxsdbgFhCq3V9c8RxT2o3\nHcUxyvSJnTtXH8hIXXxRvJEJ7UhxU6p7hWh0R2Msjz+8KS/XYqNnLo0e9GqcfjkwchY0nGK083WM\nE43AEFZUPJp+y8C68fnCjOIZvt0Zn24NR7yBbikbu3H8g5tylguR0wztbQE76sYpfd+L0e+o19wF\ndeeJ8Cye+ykEfURT9l9f8X/ze9wK8L8BBWWTrhSNWv5FZcG1vua/xLfZjzQUaKvo09dOrP76wXj1\n+4hF5cr0F1XkfHAjU74i19Cc8k7Ogrr+eBo/VyhaXzRIlP+KEFyqRu0Z+qTvgP2OeqKVHevc1R9+\nAzqrUvloWjH4ZgKegE9nihF3Q+6CuqXM0wFcKPXZojkl8GO8x4odfnbJqD1DRD1HAYUXvjWpol+7\nq/4pUlVyS157JOdfr253b9g4y7q+L3aJF8RJFeH+vJT6DXkL68+MzejYInfTS8fnlLz2ak7Ji2XZ\nJa9OC9NDroQbw2lR1pUVlqw0gY4VGAnfe6FiTUxLV3f0b7J5/9VTMLzrIT2YVHbcje0vjrwVlR/R\n/QcR1mJlRcXKkX8PmeeOOXI2vjIRlRcgctNKcdWk2bP8pf6UAL73cEKBsy6uG88p3+toSraWNwj7\nsdBV106s7n6tQ0z06430uU41Lt4dyrUHCnf/IeG7m+9RdBpE468JSjEV0b/mLazdnL+o/kd536jN\n5Rgie9OrZ6PyD6JKRNANKOIa328iSgRw9N6bDuyrscrjhPWh7HccO6AVSf9n7ZKXJijOi17hgDJr\n7ddrlp+9KTel/jti+UlkvdkTHwJrgDeM6L/Km9I/YvWh7U5iYUZxsW/78MBtILfhuQBQYdXwzqFX\nN6cs+gnIDyMVLO/mxLVM/0q7+zQqF0bootd8Z0L1bwbS9oAO/RRsfDUnYPUlxGOnU9oUbhseGHp/\n5y9Hxx9wzNUqfBc4PjYnAO0ArQLZBdKiaLPANkfMPcG9/sCQW/LSBFV5GDGnd8kQ+XnVxFm3FpRP\nuVZUf+XJ2etzfVOWuPuuQ/h+tLis/vaEygEfzxvw6am8fz2fpk784wrnds2xpaJmaeXk2cX+eRrf\nnlL/FUSuQO0FYYt3/6D3VTyWcVN/S+esf2UIcSwDWULXnVorKkuqJp/12Ngtk5aq8N9Eh7I2FT3n\npo7mkxQiQaUaoDKQYk66Pr9iwFcrHtoxNFXJ2fja9cBdQDcl6VrFrKg+cdbfEVH/4sbh7bbtAtCZ\nYM7Ec/QkhkgPVTyWdu3BRChYXzwyEBdYgitLcejqkFPZqo5+rXrC7E2FZZPuBP4zkufiqk8uuam9\ncW/o0JUJktnrM2bat/0VXQ3T/cRhnefL2fTyyah5EOWUHplKCbDKhzxdPvmsiG0z++raDCdgxink\nG6EA7GAVGSZqkxWzC9xbgwELveCZZ5zsghFnIXq5wDx6xu90IHJvW0fr7cOSbkkMOL6VwBxPfkBF\nF5cXblz1603ZNyuRC09aLXL2dRMr+7Tw9IXDv/ZQl5nsTVMXi7rLwdfbRGNB31GR1wX+ERefuK5s\n7Bn9GwNVJbd0Ta4GAtNFmKHIOUSvEusK0ZdVneurJ80qKyibdIaoPgniPcvTKsrXto4r+TvAQyW5\n6YI+ZS1jTLws+ba/ssfdbQPBEbs/MqPkpeRkMdeg8l3o85Y8BHZZodyo7lBMM6r7RXBVSFRLCkKG\nWLIxbn44kjgGFPQFlDurJp/91tgtY0eoJKwAFnXr2x5RuXjruA8O+Y07GI74RZz+0mfiWzuHX2qE\n+QqzGdA9xP1GrcLTOObR6gmzSgq3FqZC4rWg3wPpfiPfaz43ML/UXxrzZqwjgaN6o2lWafEoE3Dn\nArMgcGaMT78/UCyb1LDGwAvH73VeXTNzZmDc5iknqNhFKiwBukeAtInq7VvHFq5Ajn6QwbG79VlV\n8kqKx7u4fsTkg+aL2kwgGUwyEkgCXxNBg3CLQjVCOUJ5XLvzfvnJMxsACson5hjXma1iLweZRm+7\nMysvuHGBpRX5Hx6zSLbPzc34YfhL/fGucVOtEzfECchQFbKBQhUZR9CrlxWrrijrXEdu31bwwf8c\nK3kjbR/rBmNCkYLySY9KgCtxBjSuWuBVY+WeLeM/eOVoiXcwfG4UOW7zlBOssTX9LK6ifKAiT6no\nk+WFJT2ujznW+Ez/V4MXRjt2u+KrEKXnBRwu9ThsBfkQKHYdWVOR/37vi/bPCJ+bNxIgp7JoSFyn\nO0NUD4A0qwSafa7uLPWX9j/I4N/4343/D4mJCnbVO1//AAAAAElFTkSuQmCC\n";

var _0xd603 = [
    'bXl4',
    'cFla',
    'eXh6',
    'WGRF',
    'YWZJ',
    'dGV4dA\x3d\x3d',
    'SHRtbA\x3d\x3d',
    'ZnJvbUh0bWw\x3d',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'UnVubmFibGU\x3d',
    'SExT',
    'VG9hc3Q\x3d',
    'bWFrZVRleHQ\x3d',
    'SVlP',
    'c2hvdw\x3d\x3d',
    'bW5K',
    'clRn',
    'QmFzZTY0',
    'ZGVjb2Rl',
    'Qml0bWFwRHJhd2FibGU\x3d',
    'Qml0bWFwRmFjdG9yeQ\x3d\x3d',
    'ZGVjb2RlQnl0ZUFycmF5',
    'bW9qYW5n',
    'bWluZWNyYWZ0cGU\x3d',
    'TWFpbkFjdGl2aXR5',
    'Y3VycmVudE1haW5BY3Rpdml0eQ\x3d\x3d',
    'Z2V0',
    'dXRpbA\x3d\x3d',
    'RGlzcGxheU1ldHJpY3M\x3d',
    'Z2V0V2luZG93TWFuYWdlcg\x3d\x3d',
    'Z2V0RGVmYXVsdERpc3BsYXk\x3d',
    'Z2V0TWV0cmljcw\x3d\x3d',
    'aGVpZ2h0UGl4ZWxz',
    'd2lkdGhQaXhlbHM\x3d',
    'MXw4fDR8OXw3fDZ8MTJ8MTB8MTF8MHw1fDJ8Mw\x3d\x3d',
    'c3BsaXQ\x3d',
    'elhm',
    'RFJK',
    'eEdD',
    'c2V0T25DbGlja0xpc3RlbmVy',
    'dmlldw\x3d\x3d',
    'Vmlldw\x3d\x3d',
    'T25DbGlja0xpc3RlbmVy',
    'SVNT',
    'YXlh',
    'TGhU',
    'c2V0R3Jhdml0eQ\x3d\x3d',
    'd3Fk',
    'R3Jhdml0eQ\x3d\x3d',
    'TEVGVA\x3d\x3d',
    'VE9Q',
    'UkdP',
    'Q0VOVEVS',
    'Zmhl',
    'Qk9UVE9N',
    'T0tw',
    'dWFl',
    'Rnhn',
    'dnJ1',
    'REpv',
    'Rmxp',
    'UklHSFQ\x3d',
    'WE1U',
    'ZkZ4',
    'amR4',
    'd2lkZ2V0',
    'TGluZWFyTGF5b3V0',
    'U2Nyb2xsVmlldw\x3d\x3d',
    'c2V0TGF5b3V0UGFyYW1z',
    'TGF5b3V0UGFyYW1z',
    'c2V0QmFja2dyb3VuZERyYXdhYmxl',
    'Z3JhcGhpY3M\x3d',
    'ZHJhd2FibGU\x3d',
    'Q29sb3JEcmF3YWJsZQ\x3d\x3d',
    'Q29sb3I\x3d',
    'cGFyc2VDb2xvcg\x3d\x3d',
    'R0ha',
    'a1pC',
    'c2V0T3JpZW50YXRpb24\x3d',
    'MTB8MXw0fDExfDh8Mnw1fDd8M3wwfDZ8OQ\x3d\x3d',
    'R21m',
    'c2hvd0F0TG9jYXRpb24\x3d',
    'Z2V0V2luZG93',
    'Z2V0RGVjb3JWaWV3',
    'UGdr',
    'SWhE',
    'T2VY',
    'UWhU',
    'bmV4',
    'QU9N',
    'Y2Za',
    'R0tQ',
    'REpO',
    'c2V0V2lkdGg\x3d',
    'c2V0VG91Y2hhYmxl',
    'c2V0SGVpZ2h0',
    'c2V0Rm9jdXNhYmxl',
    'c2V0Q29udGVudFZpZXc\x3d',
    'UG9wdXBXaW5kb3c\x3d',
    'c2V0QW5pbWF0aW9uU3R5bGU\x3d',
    'c3R5bGU\x3d',
    'QW5pbWF0aW9uX0RpYWxvZw\x3d\x3d',
    'NnwyfDh8N3wzfDF8NHwwfDU\x3d',
    'dUVR',
    'cmJv',
    'Z0Nz',
    'ZkpG',
    'VlRk',
    'a0tu',
    'd2hs',
    'RnZY',
    'RWhu',
    'RENQ',
    'V0NB',
    'b3dM',
    'c2V0VGV4dFNpemU\x3d',
    'c2V0VGV4dENvbG9y',
    'VGV4dFZpZXc\x3d',
    'c2V0VGV4dA\x3d\x3d',
    'QkZU',
    'UHJvZ3Jlc3NCYXI\x3d',
    'Rmx1',
    'YXR0cg\x3d\x3d',
    'cHJvZ3Jlc3NCYXJTdHlsZUhvcml6b250YWw\x3d',
    'c2V0TWF4',
    'c2V0UHJvZ3Jlc3M\x3d',
    'RmlsZQ\x3d\x3d',
    'ZXhpc3Rz',
    'aXNGaWxl',
    'M3w0fDd8NnwyfDF8MHw1',
    'Y2xvc2U\x3d',
    'dVVU',
    'cmVhZExpbmU\x3d',
    'cHVzaA\x3d\x3d',
    'am9pbg\x3d\x3d',
    'QnVmZmVyZWRSZWFkZXI\x3d',
    'SW5wdXRTdHJlYW1SZWFkZXI\x3d',
    'RmlsZUlucHV0U3RyZWFt',
    'VVRGLTg\x3d',
    'RmlsZU91dHB1dFN0cmVhbQ\x3d\x3d',
    'd3JpdGU\x3d',
    'bGFuZw\x3d\x3d',
    'U3RyaW5n',
    'Z2V0Qnl0ZXM\x3d',
    'N3wxfDl8MTF8NHw1fDN8MHwxMHw4fDJ8Ng\x3d\x3d',
    'Wldy',
    'R1Jj',
    'R3JhZGllbnREcmF3YWJsZQ\x3d\x3d',
    'TElORUFSX0dSQURJRU5U',
    'Q05z',
    'UkFESUFMX0dSQURJRU5U',
    'U1dFRVBfR1JBRElFTlQ\x3d',
    'Zm5S',
    'c2V0Q29ybmVyUmFkaWk\x3d',
    'T3JpZW50YXRpb24\x3d',
    'VE9QX0JPVFRPTQ\x3d\x3d',
    'WWxj',
    'TEVGVF9SSUdIVA\x3d\x3d',
    'Z05z',
    'QkxfVFI\x3d',
    'dXFh',
    'VExfQlI\x3d',
    'TnlC',
    'c2V0R3JhZGllbnRUeXBl',
    'T0dB',
    'bGVuZ3Ro',
    'WnBP',
    'b2ZI',
    'UFl6',
    'S2FJ',
    'NHwzfDJ8NXwwfDE\x3d',
    'ZkpQ',
    'c3RhcnRBbmltYXRpb24\x3d',
    'VHJhbnNsYXRlQW5pbWF0aW9u',
    'QVVL',
    'RkVY',
    'VXha',
    'Wkhi',
    'QW5pbWF0aW9u',
    'UkVMQVRJVkVfVE9fU0VMRg\x3d\x3d',
    'UkVMQVRJVkVfVE9fUEFSRU5U',
    'QUJTT0xVVEU\x3d',
    'YW5pbWF0aW9u',
    'c2V0RHVyYXRpb24\x3d',
    'MXwyfDN8Nnw0fDV8MA\x3d\x3d',
    'Q2Zu',
    'Um90YXRlQW5pbWF0aW9u',
    'V0tS',
    'QUhB',
    'c2V0RmlsbEFmdGVy',
    'UmVO',
    'MXw0fDN8MnwwfDU\x3d',
    'b1pt',
    'U2NhbGVBbmltYXRpb24\x3d',
    'Y2Nz',
    'eUh6',
    'UkZB',
    'bHpz',
    'eVds',
    'QWxwaGFBbmltYXRpb24\x3d'
];
(function (_0x59c06c, _0x2254b4) {
    var _0x435994 = function (_0x1351a6) {
        while (--_0x1351a6) {
            _0x59c06c['\x70\x75\x73\x68'](_0x59c06c['\x73\x68\x69\x66\x74']());
        }
    };
    _0x435994(++_0x2254b4);
}(_0xd603, 0x1a6));
var _0x3d60 = function (_0x2a08f4, _0x4bd4ab) {
    _0x2a08f4 = _0x2a08f4 - 0x0;
    var _0x4038f0 = _0xd603[_0x2a08f4];
    if (_0x3d60['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x3b0f90 = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x29be24 = _0x3b0f90();
            var _0x1fba88 = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x29be24['\x61\x74\x6f\x62'] || (_0x29be24['\x61\x74\x6f\x62'] = function (_0x4a5fc0) {
                var _0x3101f3 = String(_0x4a5fc0)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x1b109f = 0x0, _0x1f12ae, _0x592ade, _0x19971b = 0x0, _0x54f4ca = ''; _0x592ade = _0x3101f3['\x63\x68\x61\x72\x41\x74'](_0x19971b++); ~_0x592ade && (_0x1f12ae = _0x1b109f % 0x4 ? _0x1f12ae * 0x40 + _0x592ade : _0x592ade, _0x1b109f++ % 0x4) ? _0x54f4ca += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x1f12ae >> (-0x2 * _0x1b109f & 0x6)) : 0x0) {
                    _0x592ade = _0x1fba88['\x69\x6e\x64\x65\x78\x4f\x66'](_0x592ade);
                }
                return _0x54f4ca;
            });
        }());
        _0x3d60['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0xb3ac0b) {
            var _0x523ef5 = atob(_0xb3ac0b);
            var _0x53be02 = [];
            for (var _0x5041b4 = 0x0, _0x34ba50 = _0x523ef5['\x6c\x65\x6e\x67\x74\x68']; _0x5041b4 < _0x34ba50; _0x5041b4++) {
                _0x53be02 += '\x25' + ('\x30\x30' + _0x523ef5['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x5041b4)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x53be02);
        };
        _0x3d60['\x64\x61\x74\x61'] = {};
        _0x3d60['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x3d60['\x64\x61\x74\x61'][_0x2a08f4] === undefined) {
        _0x4038f0 = _0x3d60['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x4038f0);
        _0x3d60['\x64\x61\x74\x61'][_0x2a08f4] = _0x4038f0;
    } else {
        _0x4038f0 = _0x3d60['\x64\x61\x74\x61'][_0x2a08f4];
    }
    return _0x4038f0;
};
ctx = com[_0x3d60('0x0')][_0x3d60('0x1')][_0x3d60('0x2')][_0x3d60('0x3')][_0x3d60('0x4')]();
function H() {
    var _0x2d9f0d = new android[_0x3d60('0x5')][_0x3d60('0x6')]();
    ctx[_0x3d60('0x7')]()[_0x3d60('0x8')]()[_0x3d60('0x9')](_0x2d9f0d);
    return _0x2d9f0d[_0x3d60('0xa')];
}
;
function W() {
    var _0x1a0168 = new android[_0x3d60('0x5')][_0x3d60('0x6')]();
    ctx[_0x3d60('0x7')]()[_0x3d60('0x8')]()[_0x3d60('0x9')](_0x1a0168);
    return _0x1a0168[_0x3d60('0xb')];
}
;
function NewView(_0x312296, _0x557d99, _0x396e45, _0x3caea8, _0x3fad9c, _0x471d84, _0x4ae6e2, _0x591255, _0x3392ae) {
    var _0x5a2d77 = {
        '\x7a\x58\x66': function _0x424bca(_0xf5cc7b, _0x4489a0) {
            return _0xf5cc7b(_0x4489a0);
        },
        '\x44\x52\x4a': function _0x13b19c(_0x14e6a5, _0x1dfd9e) {
            return _0x14e6a5(_0x1dfd9e);
        },
        '\x78\x47\x43': function _0x6a0aec(_0x2bafaa, _0x3dac55) {
            return _0x2bafaa != _0x3dac55;
        },
        '\x4c\x68\x54': function _0x526509(_0x619a5f, _0x3d6154) {
            return _0x619a5f == _0x3d6154;
        },
        '\x77\x71\x64': function _0x4ed4d8(_0x42b455, _0x2ac4c9) {
            return _0x42b455 | _0x2ac4c9;
        },
        '\x52\x47\x4f': function _0x2c004f(_0x282fcd, _0x86f54) {
            return _0x282fcd == _0x86f54;
        },
        '\x66\x68\x65': function _0x43cbaa(_0x4d46be, _0x1af93d) {
            return _0x4d46be == _0x1af93d;
        },
        '\x4f\x4b\x70': function _0x3f7c5a(_0x885750, _0x55219c) {
            return _0x885750 == _0x55219c;
        },
        '\x75\x61\x65': function _0x13fab7(_0x30cf86, _0x38198b) {
            return _0x30cf86 | _0x38198b;
        },
        '\x46\x78\x67': function _0x110710(_0x42539a, _0x2c4783) {
            return _0x42539a == _0x2c4783;
        },
        '\x76\x72\x75': function _0x567e9a(_0x5d1c47, _0x1622f1) {
            return _0x5d1c47 | _0x1622f1;
        },
        '\x44\x4a\x6f': function _0x46a190(_0x4eb169, _0x5daaf3) {
            return _0x4eb169 == _0x5daaf3;
        },
        '\x46\x6c\x69': function _0x42b6aa(_0x115ac5, _0x33c380) {
            return _0x115ac5 | _0x33c380;
        },
        '\x58\x4d\x54': function _0x16c788(_0x534031, _0x42d09b) {
            return _0x534031 == _0x42d09b;
        },
        '\x66\x46\x78': function _0x4bba60(_0x1ee403, _0x23d1d3) {
            return _0x1ee403 == _0x23d1d3;
        },
        '\x6a\x64\x78': function _0x5abdd8(_0x4f668e, _0xc28fb8) {
            return _0x4f668e == _0xc28fb8;
        },
        '\x47\x48\x5a': function _0x381a07(_0xb2d578, _0x26e2fe, _0x183973) {
            return _0xb2d578(_0x26e2fe, _0x183973);
        },
        '\x6b\x5a\x42': function _0x167ea6(_0x534890, _0x108ac9) {
            return _0x534890 != _0x108ac9;
        }
    };
    var _0x4ace7f = _0x3d60('0xc')[_0x3d60('0xd')]('\x7c'), _0x553b89 = 0x0;
    while (!![]) {
        switch (_0x4ace7f[_0x553b89++]) {
        case '0':
            ;
            continue;
        case '1':
            var _0x3caefe = {
                '\x49\x53\x53': function _0x2aa704(_0x30ad65, _0x4d5cfb) {
                    return _0x5a2d77[_0x3d60('0xe')](_0x30ad65, _0x4d5cfb);
                },
                '\x61\x79\x61': function _0x606c4d(_0x24bc84, _0x3ee737) {
                    return _0x5a2d77[_0x3d60('0xf')](_0x24bc84, _0x3ee737);
                }
            };
            continue;
        case '2':
            ;
            continue;
        case '3':
            return _0x3338ba;
            continue;
        case '4':
            ;
            continue;
        case '5':
            if (_0x5a2d77[_0x3d60('0x10')](_0x3392ae, null)) {
                _0x3338ba[_0x3d60('0x11')](new android[_0x3d60('0x12')][_0x3d60('0x13')][_0x3d60('0x14')]({
                    '\x6f\x6e\x43\x6c\x69\x63\x6b': function (_0x1b416e) {
                        try {
                            _0x3caefe[_0x3d60('0x15')](_0x3392ae, _0x1b416e);
                        } catch (_0x493efa) {
                            _0x3caefe[_0x3d60('0x16')](print, _0x493efa);
                        }
                        ;
                    }
                }));
            }
            continue;
        case '6':
            ;
            continue;
        case '7':
            if (_0x5a2d77[_0x3d60('0x17')](_0x3caea8, 'LT')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x19')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x5a2d77[_0x3d60('0x1d')](_0x3caea8, 'LC')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x19')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x5a2d77[_0x3d60('0x1f')](_0x3caea8, 'LB')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x19')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            } else if (_0x5a2d77[_0x3d60('0x21')](_0x3caea8, 'CT')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x19')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x5a2d77[_0x3d60('0x21')](_0x3caea8, 'CC')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x22')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x5a2d77[_0x3d60('0x23')](_0x3caea8, 'CB')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x24')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            } else if (_0x5a2d77[_0x3d60('0x25')](_0x3caea8, 'RT')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x26')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x5a2d77[_0x3d60('0x28')](_0x3caea8, 'RC')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x26')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x5a2d77[_0x3d60('0x29')](_0x3caea8, 'RB')) {
                _0x3338ba[_0x3d60('0x18')](_0x5a2d77[_0x3d60('0x26')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            }
            continue;
        case '8':
            if (_0x5a2d77[_0x3d60('0x2a')](_0x312296, 'LL')) {
                var _0x3338ba = new android[_0x3d60('0x2b')][_0x3d60('0x2c')](ctx);
            } else if (_0x5a2d77[_0x3d60('0x2a')](_0x312296, 'SV')) {
                var _0x3338ba = new android[_0x3d60('0x2b')][_0x3d60('0x2d')](ctx);
            }
            continue;
        case '9':
            _0x3338ba[_0x3d60('0x2e')](new android[_0x3d60('0x2b')][_0x3d60('0x2c')][_0x3d60('0x2f')](_0x557d99, _0x396e45));
            continue;
        case '10':
            ;
            continue;
        case '11':
            if (_0x5a2d77[_0x3d60('0x2a')](_0x471d84, 0x0)) {
                _0x3338ba[_0x3d60('0x30')](new android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x33')](android[_0x3d60('0x31')][_0x3d60('0x34')][_0x3d60('0x35')](_0x4ae6e2)));
            } else if (_0x5a2d77[_0x3d60('0x2a')](_0x471d84, 0x1)) {
                _0x3338ba[_0x3d60('0x30')](_0x5a2d77[_0x3d60('0x36')](roundBG, _0x4ae6e2, _0x591255));
            } else if (_0x5a2d77[_0x3d60('0x2a')](_0x471d84, 0x2)) {
            }
            continue;
        case '12':
            if (_0x5a2d77[_0x3d60('0x37')](_0x3fad9c, null)) {
                _0x3338ba[_0x3d60('0x38')](_0x3fad9c);
            }
            continue;
        }
        break;
    }
}
;
function NewCDV(_0x4194ec, _0x4f57ec, _0x1e69e0, _0x24474d, _0xf1f43b, _0x10ae0a, _0x3f0275, _0x4bcb5c, _0xb27a35, _0xc893ea, _0x3b09c7) {
    var _0x2755d7 = {
        '\x47\x6d\x66': function _0x398fd7(_0x57258a, _0x4b00fe) {
            return _0x57258a == _0x4b00fe;
        },
        '\x50\x67\x6b': function _0x2598a3(_0x1f7d10, _0x5cd5be) {
            return _0x1f7d10 | _0x5cd5be;
        },
        '\x49\x68\x44': function _0xc9d157(_0x202a91, _0x5a7b2e) {
            return _0x202a91 | _0x5a7b2e;
        },
        '\x4f\x65\x58': function _0x3e72be(_0x3d6aec, _0x177bc4) {
            return _0x3d6aec == _0x177bc4;
        },
        '\x51\x68\x54': function _0x49c29b(_0x28a07b, _0x2bb713) {
            return _0x28a07b | _0x2bb713;
        },
        '\x6e\x65\x78': function _0x1804c4(_0x5636da, _0x289924) {
            return _0x5636da == _0x289924;
        },
        '\x41\x4f\x4d': function _0x26ca1c(_0x204984, _0x42f09f) {
            return _0x204984 | _0x42f09f;
        },
        '\x63\x66\x5a': function _0x1569ba(_0xb565e3, _0x4564b6) {
            return _0xb565e3 | _0x4564b6;
        },
        '\x47\x4b\x50': function _0x344ea2(_0x3c9dd1, _0x1e71b2, _0x496154) {
            return _0x3c9dd1(_0x1e71b2, _0x496154);
        },
        '\x44\x4a\x4e': function _0x1a34b4(_0x5e1d33, _0x236754) {
            return _0x5e1d33 == _0x236754;
        }
    };
    var _0xc23341 = _0x3d60('0x39')[_0x3d60('0xd')]('\x7c'), _0x465130 = 0x0;
    while (!![]) {
        switch (_0xc23341[_0x465130++]) {
        case '0':
            if (_0x2755d7[_0x3d60('0x3a')](_0xb27a35, 'LT')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x3e')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x3a')](_0xb27a35, 'LC')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x3f')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x3a')](_0xb27a35, 'LB')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x3f')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x40')](_0xb27a35, 'CT')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x41')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x42')](_0xb27a35, 'CC')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x41')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x42')](_0xb27a35, 'CB')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x41')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x42')](_0xb27a35, 'RT')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x43')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x42')](_0xb27a35, 'RC')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x44')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]), _0xc893ea, _0x3b09c7);
            } else if (_0x2755d7[_0x3d60('0x42')](_0xb27a35, 'RB')) {
                _0x55c946[_0x3d60('0x3b')](ctx[_0x3d60('0x3c')]()[_0x3d60('0x3d')](), _0x2755d7[_0x3d60('0x44')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]), _0xc893ea, _0x3b09c7);
            }
            continue;
        case '1':
            if (_0x2755d7[_0x3d60('0x42')](_0x4194ec, 0x0)) {
                _0x55c946[_0x3d60('0x30')](new android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x33')](android[_0x3d60('0x31')][_0x3d60('0x34')][_0x3d60('0x35')](_0x4f57ec)));
            } else if (_0x2755d7[_0x3d60('0x42')](_0x4194ec, 0x1)) {
                _0x55c946[_0x3d60('0x30')](_0x2755d7[_0x3d60('0x45')](roundBG, _0x4f57ec, _0x1e69e0));
            } else if (_0x2755d7[_0x3d60('0x46')](_0x4194ec, 0x2)) {
            }
            continue;
        case '2':
            _0x55c946[_0x3d60('0x47')](_0xf1f43b);
            continue;
        case '3':
            _0x55c946[_0x3d60('0x48')](_0x4bcb5c);
            continue;
        case '4':
            ;
            continue;
        case '5':
            _0x55c946[_0x3d60('0x49')](_0x10ae0a);
            continue;
        case '6':
            ;
            continue;
        case '7':
            _0x55c946[_0x3d60('0x4a')](_0x3f0275);
            continue;
        case '8':
            _0x55c946[_0x3d60('0x4b')](_0x24474d);
            continue;
        case '9':
            return _0x55c946;
            continue;
        case '10':
            var _0x55c946 = new android[_0x3d60('0x2b')][_0x3d60('0x4c')]();
            continue;
        case '11':
            _0x55c946[_0x3d60('0x4d')](android['R'][_0x3d60('0x4e')][_0x3d60('0x4f')]);
            continue;
        }
        break;
    }
}
;
function NewText(_0x54d6c6, _0x47f95b, _0x3476ef, _0x5a7f08) {
    var _0x108989 = {
        '\x75\x45\x51': function _0x371ee1(_0x2c5610, _0x519025) {
            return _0x2c5610 == _0x519025;
        },
        '\x72\x62\x6f': function _0x53d762(_0x52de00, _0x2dd191) {
            return _0x52de00 | _0x2dd191;
        },
        '\x67\x43\x73': function _0xd96748(_0x139216, _0xf4e6ce) {
            return _0x139216 == _0xf4e6ce;
        },
        '\x66\x4a\x46': function _0x4dbbad(_0x2a9d71, _0x5f452c) {
            return _0x2a9d71 | _0x5f452c;
        },
        '\x56\x54\x64': function _0x1bf04d(_0x311155, _0x568bce) {
            return _0x311155 | _0x568bce;
        },
        '\x6b\x4b\x6e': function _0x2f65d7(_0x28f1dc, _0x342f3f) {
            return _0x28f1dc == _0x342f3f;
        },
        '\x77\x68\x6c': function _0x2a0a73(_0x442891, _0x41dd6a) {
            return _0x442891 == _0x41dd6a;
        },
        '\x46\x76\x58': function _0x54f5bd(_0x55e9ca, _0x5e4a9e) {
            return _0x55e9ca | _0x5e4a9e;
        },
        '\x45\x68\x6e': function _0x4e43da(_0x58d901, _0x58db51) {
            return _0x58d901 == _0x58db51;
        },
        '\x44\x43\x50': function _0x47f5d6(_0x46fd47, _0x26d9fe) {
            return _0x46fd47 | _0x26d9fe;
        },
        '\x57\x43\x41': function _0x4f4bd1(_0x6b37ff, _0x569bf8) {
            return _0x6b37ff | _0x569bf8;
        },
        '\x6f\x77\x4c': function _0x509c58(_0x380624, _0x404b54) {
            return _0x380624 != _0x404b54;
        }
    };
    var _0x23bf0b = _0x3d60('0x50')[_0x3d60('0xd')]('\x7c'), _0x975f53 = 0x0;
    while (!![]) {
        switch (_0x23bf0b[_0x975f53++]) {
        case '0':
            ;
            continue;
        case '1':
            ;
            continue;
        case '2':
            if (_0x108989[_0x3d60('0x51')](_0x47f95b, 'LT')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x52')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x108989[_0x3d60('0x53')](_0x47f95b, 'LC')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x54')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x108989[_0x3d60('0x53')](_0x47f95b, 'LB')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x55')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1b')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            } else if (_0x108989[_0x3d60('0x53')](_0x47f95b, 'CT')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x55')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x108989[_0x3d60('0x53')](_0x47f95b, 'CC')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x55')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x108989[_0x3d60('0x56')](_0x47f95b, 'CB')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x55')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            } else if (_0x108989[_0x3d60('0x57')](_0x47f95b, 'RT')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x58')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1c')]));
            } else if (_0x108989[_0x3d60('0x59')](_0x47f95b, 'RC')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x5a')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x1e')]));
            } else if (_0x108989[_0x3d60('0x59')](_0x47f95b, 'RB')) {
                _0x5569d2[_0x3d60('0x18')](_0x108989[_0x3d60('0x5b')](android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x27')], android[_0x3d60('0x12')][_0x3d60('0x1a')][_0x3d60('0x20')]));
            }
            continue;
        case '3':
            if (_0x108989[_0x3d60('0x5c')](_0x3476ef, null)) {
                _0x5569d2[_0x3d60('0x5d')](_0x3476ef);
            }
            continue;
        case '4':
            if (_0x108989[_0x3d60('0x5c')](_0x5a7f08, null)) {
                _0x5569d2[_0x3d60('0x5e')](android[_0x3d60('0x31')][_0x3d60('0x34')][_0x3d60('0x35')](_0x5a7f08));
            }
            continue;
        case '5':
            return _0x5569d2;
            continue;
        case '6':
            var _0x5569d2 = new android[_0x3d60('0x2b')][_0x3d60('0x5f')](ctx);
            continue;
        case '7':
            _0x5569d2[_0x3d60('0x60')](_0x54d6c6);
            continue;
        case '8':
            ;
            continue;
        }
        break;
    }
}
;
function NewPB(_0x1dbe40, _0x450014, _0x503012) {
    var _0x1b0cee = {
        '\x42\x46\x54': function _0x6dbcac(_0xa72935, _0x4f206e) {
            return _0xa72935 == _0x4f206e;
        },
        '\x46\x6c\x75': function _0x1b4d51(_0xfeaa61, _0x550811) {
            return _0xfeaa61 == _0x550811;
        }
    };
    if (_0x1b0cee[_0x3d60('0x61')](_0x1dbe40, 0x1)) {
        var _0x19def3 = new android[_0x3d60('0x2b')][_0x3d60('0x62')](ctx);
        return _0x19def3;
    } else if (_0x1b0cee[_0x3d60('0x63')](_0x1dbe40, 0x2)) {
        var _0x53fe79 = new android[_0x3d60('0x2b')][_0x3d60('0x62')](ctx, null, android['R'][_0x3d60('0x64')][_0x3d60('0x65')]);
        _0x53fe79[_0x3d60('0x66')](_0x450014);
        _0x53fe79[_0x3d60('0x67')](_0x503012);
    }
    ;
}
;
function CheckFiles(_0x194559) {
    var _0x292699 = new java['io'][_0x3d60('0x68')](_0x194559);
    if (!_0x292699[_0x3d60('0x69')]()) {
        return ![];
    } else {
        return !![];
    }
    ;
}
;
function ReadData(_0x20ccf0) {
    var _0x2127d4 = {
        '\x75\x55\x54': function _0x3d36e0(_0x2fd469, _0x481b54) {
            return _0x2fd469 != _0x481b54;
        }
    };
    var _0x22f730 = new java['io'][_0x3d60('0x68')](_0x20ccf0);
    if (_0x22f730[_0x3d60('0x6a')]()) {
        var _0xd16ae2 = _0x3d60('0x6b')[_0x3d60('0xd')]('\x7c'), _0x54bdbc = 0x0;
        while (!![]) {
            switch (_0xd16ae2[_0x54bdbc++]) {
            case '0':
                _0x657503[_0x3d60('0x6c')]();
                continue;
            case '1':
                ;
                continue;
            case '2':
                while (_0x2127d4[_0x3d60('0x6d')](_0x49d7ee = _0x437f6b[_0x3d60('0x6e')](), null)) {
                    _0x961ee6[_0x3d60('0x6f')](_0x49d7ee);
                }
                continue;
            case '3':
                var _0x961ee6 = [];
                continue;
            case '4':
                var _0x49d7ee = '';
                continue;
            case '5':
                return _0x961ee6[_0x3d60('0x70')]('\x0a');
                continue;
            case '6':
                var _0x437f6b = new java['io'][_0x3d60('0x71')](_0x657503);
                continue;
            case '7':
                var _0x657503 = new java['io'][_0x3d60('0x72')](new java['io'][_0x3d60('0x73')](_0x22f730), _0x3d60('0x74'));
                continue;
            }
            break;
        }
    }
    ;
}
;
function InputData(_0x4b6201, _0xaa1c58) {
    var _0x77cb32 = new java['io'][_0x3d60('0x75')](_0x4b6201);
    _0x77cb32[_0x3d60('0x76')](java[_0x3d60('0x77')][_0x3d60('0x78')](_0xaa1c58)[_0x3d60('0x79')]());
    _0x77cb32[_0x3d60('0x6c')]();
}
;
function roundRect(_0x902ed2, _0x2424b1, _0x3bd8d5, _0x4d13a8) {
    var _0x187b45 = {
        '\x5a\x57\x72': function _0x1fc6ff(_0x32a78e, _0x3197fd) {
            return _0x32a78e == _0x3197fd;
        },
        '\x47\x52\x63': function _0x12d264(_0xc82092, _0x1f6ed8) {
            return _0xc82092 == _0x1f6ed8;
        },
        '\x43\x4e\x73': function _0x1856a1(_0x4511e8, _0x2820b1) {
            return _0x4511e8 == _0x2820b1;
        },
        '\x66\x6e\x52': function _0x1d2d78(_0x318b00, _0x45f6e6) {
            return _0x318b00 instanceof _0x45f6e6;
        },
        '\x59\x6c\x63': function _0x27bdcf(_0x4c0b0e, _0x4bf685) {
            return _0x4c0b0e == _0x4bf685;
        },
        '\x67\x4e\x73': function _0x451fc1(_0x20c820, _0x3e2080) {
            return _0x20c820 == _0x3e2080;
        },
        '\x75\x71\x61': function _0x3b14c6(_0x503cf4, _0x51ab6c) {
            return _0x503cf4 == _0x51ab6c;
        },
        '\x4e\x79\x42': function _0x2ac49e(_0x10ccbe, _0x20e4b5) {
            return _0x10ccbe instanceof _0x20e4b5;
        }
    };
    var _0x6165b = _0x3d60('0x7a')[_0x3d60('0xd')]('\x7c'), _0x3e0f99 = 0x0;
    while (!![]) {
        switch (_0x6165b[_0x3e0f99++]) {
        case '0':
            if (_0x187b45[_0x3d60('0x7b')](_0x4d13a8, 0x0) || _0x187b45[_0x3d60('0x7c')](_0x4d13a8, null)) {
                _0x1769ac = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x7e')];
            } else if (_0x187b45[_0x3d60('0x7f')](_0x4d13a8, 0x1)) {
                _0x1769ac = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x80')];
            } else if (_0x187b45[_0x3d60('0x7f')](_0x4d13a8, 0x2)) {
                _0x1769ac = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x81')];
            }
            continue;
        case '1':
            if (!_0x187b45[_0x3d60('0x82')](_0x2424b1, Array))
                _0x2424b1 = [
                    _0x2424b1,
                    _0x2424b1,
                    _0x2424b1,
                    _0x2424b1
                ];
            continue;
        case '2':
            _0x2b3ed5[_0x3d60('0x83')]([
                _0x2424b1[0x0],
                _0x2424b1[0x0],
                _0x2424b1[0x1],
                _0x2424b1[0x1],
                _0x2424b1[0x2],
                _0x2424b1[0x2],
                _0x2424b1[0x3],
                _0x2424b1[0x3]
            ]);
            continue;
        case '3':
            var _0x2b3ed5 = new android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')](_0x413493, _0x902ed2);
            continue;
        case '4':
            if (_0x187b45[_0x3d60('0x7f')](_0x3bd8d5, 'TB') || _0x187b45[_0x3d60('0x7f')](_0x3bd8d5, null)) {
                _0x413493 = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x84')][_0x3d60('0x85')];
            } else if (_0x187b45[_0x3d60('0x86')](_0x3bd8d5, 'LR')) {
                _0x413493 = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x84')][_0x3d60('0x87')];
            } else if (_0x187b45[_0x3d60('0x88')](_0x3bd8d5, 'RT')) {
                _0x413493 = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x84')][_0x3d60('0x89')];
            } else if (_0x187b45[_0x3d60('0x8a')](_0x3bd8d5, 'RB')) {
                _0x413493 = android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0x7d')][_0x3d60('0x84')][_0x3d60('0x8b')];
            }
            continue;
        case '5':
            ;
            continue;
        case '6':
            return _0x2b3ed5;
            continue;
        case '7':
            if (!_0x187b45[_0x3d60('0x8c')](_0x902ed2, Array))
                _0x902ed2 = [
                    _0x902ed2,
                    _0x902ed2,
                    _0x902ed2
                ];
            continue;
        case '8':
            _0x2b3ed5[_0x3d60('0x8d')](_0x1769ac);
            continue;
        case '9':
            if (_0x187b45[_0x3d60('0x8a')](_0x2424b1, null))
                _0x2424b1 = [
                    0xa,
                    0xa,
                    0xa,
                    0xa
                ];
            continue;
        case '10':
            ;
            continue;
        case '11':
            var _0x413493 = null, _0x1769ac = null;
            continue;
        }
        break;
    }
}
;
function roundBG(_0x1224fd, _0x29fe7d, _0x185cad) {
    var _0x286ec3 = {
        '\x4f\x47\x41': function _0x30b19e(_0x2e2ef9, _0x3d4d50) {
            return _0x2e2ef9 == _0x3d4d50;
        },
        '\x5a\x70\x4f': function _0x47003f(_0x3f2202, _0x2e97e1, _0x3921d5, _0x243ac5, _0x21bc29) {
            return _0x3f2202(_0x2e97e1, _0x3921d5, _0x243ac5, _0x21bc29);
        },
        '\x6f\x66\x48': function _0x4e6743(_0xb21a09, _0x2197ac) {
            return _0xb21a09(_0x2197ac);
        },
        '\x50\x59\x7a': function _0x371829(_0x544eae, _0x204b32) {
            return _0x544eae(_0x204b32);
        },
        '\x4b\x61\x49': function _0x107330(_0x85955, _0x15ba0a) {
            return _0x85955(_0x15ba0a);
        }
    };
    if (_0x286ec3[_0x3d60('0x8e')](_0x1224fd[_0x3d60('0x8f')], 0x2)) {
        return _0x286ec3[_0x3d60('0x90')](roundRect, _0x286ec3[_0x3d60('0x91')](hexColor, _0x1224fd[0x1]), _0x29fe7d, _0x1224fd[0x0], _0x185cad);
    } else if (_0x286ec3[_0x3d60('0x8e')](_0x1224fd[_0x3d60('0x8f')], 0x3)) {
        return _0x286ec3[_0x3d60('0x90')](roundRect, [
            _0x286ec3[_0x3d60('0x92')](hexColor, _0x1224fd[0x1]),
            _0x286ec3[_0x3d60('0x93')](hexColor, _0x1224fd[0x2])
        ], _0x29fe7d, _0x1224fd[0x0], _0x185cad);
    }
    ;
}
;
function hexColor(_0x4c43be) {
    return android[_0x3d60('0x31')][_0x3d60('0x34')][_0x3d60('0x35')](_0x4c43be);
}
;
function UIMove(_0x5aed1c, _0x4c1a41, _0x5d4593, _0xd049b3, _0x17185e, _0x2e7c7d, _0x5c3a03) {
    var _0x3c80d5 = {
        '\x66\x4a\x50': function _0x5e446d(_0x1e2f52, _0x58e515) {
            return _0x1e2f52 != _0x58e515;
        },
        '\x41\x55\x4b': function _0x47a7f0(_0x170416, _0x3a3e4f) {
            return _0x170416 * _0x3a3e4f;
        },
        '\x46\x45\x58': function _0x567d40(_0x386b33, _0x47c183) {
            return _0x386b33 * _0x47c183;
        },
        '\x55\x78\x5a': function _0x1e9b52(_0x3f7e44, _0xe18c5f) {
            return _0x3f7e44 * _0xe18c5f;
        },
        '\x5a\x48\x62': function _0x30796d(_0x5c1128, _0x1e2f3b) {
            return _0x5c1128 == _0x1e2f3b;
        }
    };
    var _0x45bfc8 = _0x3d60('0x94')[_0x3d60('0xd')]('\x7c'), _0x25afcf = 0x0;
    while (!![]) {
        switch (_0x45bfc8[_0x25afcf++]) {
        case '0':
            if (_0x3c80d5[_0x3d60('0x95')](_0x5aed1c, null))
                _0x5aed1c[_0x3d60('0x96')](_0x7c4c4e);
            continue;
        case '1':
            return _0x7c4c4e;
            continue;
        case '2':
            var _0x7c4c4e = new _0x269912[_0x3d60('0x97')](_0x2baf95, _0x3c80d5[_0x3d60('0x98')](_0x4c1a41, 0.01), _0x2baf95, _0x3c80d5[_0x3d60('0x99')](_0x5d4593, 0.01), _0x2baf95, _0x3c80d5[_0x3d60('0x99')](_0xd049b3, 0.01), _0x2baf95, _0x3c80d5[_0x3d60('0x9a')](_0x17185e, 0.01));
            continue;
        case '3':
            var _0x2baf95 = _0x3c80d5[_0x3d60('0x9b')](_0x5c3a03, null) || _0x3c80d5[_0x3d60('0x9b')](_0x5c3a03, 0x0) ? _0x269912[_0x3d60('0x9c')][_0x3d60('0x9d')] : _0x3c80d5[_0x3d60('0x9b')](_0x5c3a03, 0x1) ? _0x269912[_0x3d60('0x9c')][_0x3d60('0x9e')] : _0x269912[_0x3d60('0x9c')][_0x3d60('0x9f')];
            continue;
        case '4':
            var _0x269912 = android[_0x3d60('0x12')][_0x3d60('0xa0')];
            continue;
        case '5':
            _0x7c4c4e[_0x3d60('0xa1')](_0x2e7c7d);
            continue;
        }
        break;
    }
}
;
function UIRotate(_0x5f31df, _0xbad7ba, _0x58ed61, _0xec7a84, _0x3dd1f4, _0x2c9ef7, _0x53aa42) {
    var _0x563221 = {
        '\x43\x66\x6e': function _0x2149d4(_0x518d49, _0x4d19e9) {
            return _0x518d49 == _0x4d19e9;
        },
        '\x57\x4b\x52': function _0x2f7e2c(_0x24d082, _0x57dfb1) {
            return _0x24d082 * _0x57dfb1;
        },
        '\x41\x48\x41': function _0x20d404(_0x338e9f, _0x4f094d) {
            return _0x338e9f * _0x4f094d;
        },
        '\x52\x65\x4e': function _0x5a293a(_0x4c48f8, _0x5dd085) {
            return _0x4c48f8 != _0x5dd085;
        }
    };
    var _0x4f3c46 = _0x3d60('0xa2')[_0x3d60('0xd')]('\x7c'), _0x1717f5 = 0x0;
    while (!![]) {
        switch (_0x4f3c46[_0x1717f5++]) {
        case '0':
            return _0x8ebae4;
            continue;
        case '1':
            var _0x56d74f = android[_0x3d60('0x12')][_0x3d60('0xa0')];
            continue;
        case '2':
            var _0x504def = _0x563221[_0x3d60('0xa3')](_0x53aa42, null) || _0x563221[_0x3d60('0xa3')](_0x53aa42, 0x0) ? _0x56d74f[_0x3d60('0x9c')][_0x3d60('0x9d')] : _0x563221[_0x3d60('0xa3')](_0x53aa42, 0x1) ? _0x56d74f[_0x3d60('0x9c')][_0x3d60('0x9e')] : _0x56d74f[_0x3d60('0x9c')][_0x3d60('0x9f')];
            continue;
        case '3':
            var _0x8ebae4 = new _0x56d74f[_0x3d60('0xa4')](_0xbad7ba, _0x58ed61, _0x504def, _0x563221[_0x3d60('0xa5')](_0xec7a84, 0.01), _0x504def, _0x563221[_0x3d60('0xa6')](_0x3dd1f4, 0.01));
            continue;
        case '4':
            _0x8ebae4[_0x3d60('0xa7')](!![]);
            continue;
        case '5':
            if (_0x563221[_0x3d60('0xa8')](_0x5f31df, null))
                _0x5f31df[_0x3d60('0x96')](_0x8ebae4);
            continue;
        case '6':
            _0x8ebae4[_0x3d60('0xa1')](_0x2c9ef7);
            continue;
        }
        break;
    }
}
;
function UIShrink(_0x37f7d7, _0x2154de, _0x4e7744, _0x4317ac, _0xd3658b, _0x229ad2, _0x119079, _0x27d40f, _0x11e762) {
    var _0xbf7396 = {
        '\x6f\x5a\x6d': function _0x4432ae(_0x5df012, _0x3c3a53) {
            return _0x5df012 != _0x3c3a53;
        },
        '\x63\x63\x73': function _0x233776(_0x3681a7, _0x49f611) {
            return _0x3681a7 * _0x49f611;
        },
        '\x79\x48\x7a': function _0xd1bd82(_0x4083e3, _0x8f8676) {
            return _0x4083e3 * _0x8f8676;
        },
        '\x52\x46\x41': function _0x51e59e(_0x4b417b, _0x56df6f) {
            return _0x4b417b * _0x56df6f;
        },
        '\x6c\x7a\x73': function _0x13977b(_0x3504cc, _0x393efb) {
            return _0x3504cc * _0x393efb;
        },
        '\x79\x57\x6c': function _0x353319(_0x2a6587, _0x14a7ad) {
            return _0x2a6587 == _0x14a7ad;
        }
    };
    var _0x390fc6 = _0x3d60('0xa9')[_0x3d60('0xd')]('\x7c'), _0x16987f = 0x0;
    while (!![]) {
        switch (_0x390fc6[_0x16987f++]) {
        case '0':
            if (_0xbf7396[_0x3d60('0xaa')](_0x37f7d7, null))
                _0x37f7d7[_0x3d60('0x96')](_0x363d63);
            continue;
        case '1':
            var _0x249c7b = android[_0x3d60('0x12')][_0x3d60('0xa0')];
            continue;
        case '2':
            _0x363d63[_0x3d60('0xa1')](_0x27d40f);
            continue;
        case '3':
            var _0x363d63 = new _0x249c7b[_0x3d60('0xab')](_0xbf7396[_0x3d60('0xac')](_0x2154de, 0.01), _0xbf7396[_0x3d60('0xad')](_0x4e7744, 0.01), _0xbf7396[_0x3d60('0xae')](_0x4317ac, 0.01), _0xbf7396[_0x3d60('0xae')](_0xd3658b, 0.01), _0x2b5677, _0xbf7396[_0x3d60('0xaf')](_0x229ad2, 0.01), _0x2b5677, _0xbf7396[_0x3d60('0xaf')](_0x119079, 0.01));
            continue;
        case '4':
            var _0x2b5677 = _0xbf7396[_0x3d60('0xb0')](_0x11e762, null) || _0xbf7396[_0x3d60('0xb0')](_0x11e762, 0x0) ? _0x249c7b[_0x3d60('0x9c')][_0x3d60('0x9d')] : _0xbf7396[_0x3d60('0xb0')](_0x11e762, 0x1) ? _0x249c7b[_0x3d60('0x9c')][_0x3d60('0x9e')] : _0x249c7b[_0x3d60('0x9c')][_0x3d60('0x9f')];
            continue;
        case '5':
            return _0x363d63;
            continue;
        }
        break;
    }
}
;
function UIFadein(_0x2801b2, _0x46fd5c, _0x438f20, _0x200bdd) {
    var _0x42336c = {
        '\x6d\x79\x78': function _0x487624(_0x454150, _0x28145b) {
            return _0x454150 * _0x28145b;
        },
        '\x70\x59\x5a': function _0x344764(_0x29fd9a, _0x5b2dc6) {
            return _0x29fd9a != _0x5b2dc6;
        }
    };
    var _0xa96c02 = new android[_0x3d60('0x12')][_0x3d60('0xa0')][_0x3d60('0xb1')](_0x42336c[_0x3d60('0xb2')](_0x46fd5c, 0.01), _0x42336c[_0x3d60('0xb2')](_0x438f20, 0.01));
    _0xa96c02[_0x3d60('0xa1')](_0x200bdd);
    if (_0x42336c[_0x3d60('0xb3')](_0x2801b2, null))
        _0x2801b2[_0x3d60('0x96')](_0xa96c02);
    return _0xa96c02;
}
;
function UIZoom(_0x36e5fe, _0x58b03c, _0x2203bf, _0x1466c8, _0x4099c7) {
    var _0x34eea5 = {
        '\x79\x78\x7a': function _0x3f97c2(_0x32091e, _0x2674de, _0x39885d, _0x262009, _0x4c37d8, _0x41713d, _0x1f27a0, _0x13683d, _0x402340, _0x579c1f) {
            return _0x32091e(_0x2674de, _0x39885d, _0x262009, _0x4c37d8, _0x41713d, _0x1f27a0, _0x13683d, _0x402340, _0x579c1f);
        }
    };
    return _0x34eea5[_0x3d60('0xb4')](UIShrink, _0x36e5fe, _0x58b03c, _0x2203bf, _0x58b03c, _0x2203bf, 0x32, 0x32, _0x1466c8, _0x4099c7);
}
;
function UILevel(_0x44e1ed, _0x298f34, _0x4b1784, _0x5bd6cd, _0x2e03c4) {
    var _0x3644d7 = {
        '\x58\x64\x45': function _0x344175(_0xa1efc0, _0x3a548d, _0x3015c7, _0x431d56, _0x36f726, _0x17ace9, _0x11e8fd, _0x278780) {
            return _0xa1efc0(_0x3a548d, _0x3015c7, _0x431d56, _0x36f726, _0x17ace9, _0x11e8fd, _0x278780);
        }
    };
    return _0x3644d7[_0x3d60('0xb5')](UIMove, _0x44e1ed, _0x298f34, _0x4b1784, 0x0, 0x0, _0x5bd6cd, _0x2e03c4);
}
;
function UIPlumb(_0x5ae7f6, _0x3727f9, _0x10cf85, _0x1c133e, _0x51b80a) {
    var _0x4660a9 = {
        '\x61\x66\x49': function _0x5b2b88(_0x31adc3, _0x5414db, _0x2d7a59, _0xa981e4, _0x5b3d7c, _0x3af3fd, _0x4c35dd, _0x1fb71b) {
            return _0x31adc3(_0x5414db, _0x2d7a59, _0xa981e4, _0x5b3d7c, _0x3af3fd, _0x4c35dd, _0x1fb71b);
        }
    };
    return _0x4660a9[_0x3d60('0xb6')](UIMove, _0x5ae7f6, 0x0, 0x0, _0x3727f9, _0x10cf85, _0x1c133e, _0x51b80a);
}
;
function color(_0x10dc31) {
    return new android[_0x3d60('0xb7')][_0x3d60('0xb8')][_0x3d60('0xb9')](_0x10dc31);
}
;
function toast(_0x306bf8, _0x7dea8) {
    var _0x17ad0c = {
        '\x48\x4c\x53': function _0x1b5890(_0x4b7c11, _0x196bdb) {
            return _0x4b7c11 == _0x196bdb;
        },
        '\x49\x59\x4f': function _0x4542b2(_0x933dc6, _0x127138) {
            return _0x933dc6(_0x127138);
        },
        '\x6d\x6e\x4a': function _0x566c6b(_0x430718, _0x514b36) {
            return _0x430718 != _0x514b36;
        },
        '\x72\x54\x67': function _0x2ae029(_0x442db4, _0x12ae95) {
            return _0x442db4(_0x12ae95);
        }
    };
    ctx[_0x3d60('0xba')](new java[_0x3d60('0x77')][_0x3d60('0xbb')]({
        '\x72\x75\x6e': function () {
            if (_0x17ad0c[_0x3d60('0xbc')](_0x7dea8, null)) {
                android[_0x3d60('0x2b')][_0x3d60('0xbd')][_0x3d60('0xbe')](ctx, _0x17ad0c[_0x3d60('0xbf')](color, _0x306bf8), 0x2)[_0x3d60('0xc0')]();
            } else if (_0x17ad0c[_0x3d60('0xc1')](_0x7dea8, 0x1)) {
                android[_0x3d60('0x2b')][_0x3d60('0xbd')][_0x3d60('0xbe')](ctx, _0x17ad0c[_0x3d60('0xc2')](color, _0x306bf8), 0xa)[_0x3d60('0xc0')]();
            } else {
                android[_0x3d60('0x2b')][_0x3d60('0xbd')][_0x3d60('0xbe')](ctx, _0x17ad0c[_0x3d60('0xc2')](color, _0x17ad0c[_0x3d60('0xc2')](replaceColor, lang[0xa])), 0x0)[_0x3d60('0xc0')]();
            }
            ;
        }
    }));
}
;
function BaseT(_0x4e580f) {
    var _0x513190 = android[_0x3d60('0x5')][_0x3d60('0xc3')][_0x3d60('0xc4')](_0x4e580f, 0x0);
    var _0x10ecd5 = new android[_0x3d60('0x31')][_0x3d60('0x32')][_0x3d60('0xc5')](android[_0x3d60('0x31')][_0x3d60('0xc6')][_0x3d60('0xc7')](_0x513190, 0x0, _0x513190[_0x3d60('0x8f')]));
    return _0x10ecd5;
}
;


var _0x509f = [
    'UXp2',
    '5YWN6LSj5aOw5piO5Y\x2bK5L2\x2f55So5p2h5qy\x2b77ya',
    'ICAxLuS9v\x2beUqOivpei1hOa6kOihqOekuuaCqOW3suWQjOaEj\x2bW5tuaOpeWPl\x2bebuOWFs\x2badoeasvuOAgg\x3d\x3d',
    'ICAyLuWOn\x2bS9nOiAheS4jeS8muWvueS9v\x2beUqOiAheS9v\x2beUqOivpei1hOa6kOmAoOaIkOeahOS4gOWIh\x2bWQjuaenOi0n\x2bi0o\x2b\x2b8jOWMheaLrOS9huS4jemZkOS6jua1gemHj\x2beahOaUtuWPluOAgeaVsOaNrueahOaNn\x2bWdj\x2betieOAgg\x3d\x3d',
    'ICAzLuWvueS6juWtmOWcqOS6jua6kOeggeS4remdnuWOn\x2bWIm\x2bacquaOiOadg\x2beahOS7o\x2begge\x2b8jOW3suWwveWPr\x2biDveiBlOezu\x2bS6huWOn\x2bS9nOiAhe\x2b8jOS9hueUseS6juS6kuiBlOe9keeahOWkjeadguaAp\x2bWPr\x2biDveacieeWj\x2ba8j\x2b\x2b8jOWPr\x2biBlOezu\x2baIkeWkhOeQhu\x2b8jOS9huS4jeS8mui0n\x2bWFtuWug\x2bi0o\x2bS7u\x2bOAgg\x3d\x3d',
    'ICA0LuWvueS6jueJiOacrOabtOaWsOOAgeWFjei0o\x2bWjsOaYjuetieWFrOWRiuS\x2fruaUueaXtu\x2b8jOivt\x2beUqOaIt\x2bafpeivouacieWFs\x2bWGheWuue\x2b8jOiLpee7p\x2be7reS9v\x2beUqOS7o\x2bihqOWQjOaEj\x2b\x2b8jOWQpuWImeW6lOWBnOatouS9v\x2beUqOOAgg\x3d\x3d',
    'ICA1Luemgeatouebl\x2beUqO\x2b8jOegtOino\x2b\x2b8jOS\x2fruaUueS7o\x2beggeacque7j\x2bWFgeiuuOWPkeW4g\x2bWIsOesrOS4ieaWueW5s\x2bWPsOOAgg\x3d\x3d',
    'ICA2LuemgeatouWcqOWOn\x2bS9nOiAheazqOWGjOeahOebuOWFs\x2be9kee7nOW5s\x2bWPsOi\x2fm\x2bihjOmqmuaJsOOAgg\x3d\x3d',
    'ICA3Luivt\x2bWLv\x2bS9v\x2beUqOS7luS6uueahOegtOino\x2bOAgemtlOaUueerr\x2b\x2b8jOWPr\x2biDveWQq\x2bacieeXheavkuaIluS4jeiJr\x2bS\x2foeaBr\x2b\x2b8jOivt\x2bS9v\x2beUqOWOn\x2bS9nOiAheWPkeW4g\x2beahOato\x2beJiOOAgg\x3d\x3d',
    'ICA4Luivt\x2bWLv\x2bWwhui1hOa6kOWcqOacque7j\x2bWOn\x2bS9nOiAheWFgeiuuOeahOaDheWGteS4i\x2bWPkeW4g\x2bOAgei9rOWPkee7meesrOS4ieaWueW5s\x2bWPsOaIluS4quS6uuS9v\x2beUqOOAgg\x3d\x3d',
    'ICA5Lui\x2fnee6pumcgOi0n\x2bebuOWFs\x2bi0o\x2bS7u\x2bOAgg\x3d\x3d',
    'bGVuZ3Ro',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'bGpv',
    'aFRE',
    'U2Nq',
    'RW52aXJvbm1lbnQ\x3d',
    'Z2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5',
    'L21jdG9vbHMv',
    'RmlsZQ\x3d\x3d',
    'bWtkaXJz',
    'SlZU',
    'bHFw',
    'L21jdG9vbHMvanNjYWNoZTIuNQ\x3d\x3d',
    'ZFRz',
    'a1NF',
    'VFFs',
    'Zklm',
    'S1Jq',
    'Y094',
    'UnpN',
    'a0Jt',
    'I0ZGRkZGRg\x3d\x3d',
    'UVBm',
    'dkp5',
    'SGhP',
    'dlBa',
    'MXwyfDN8NHww',
    'c3BsaXQ\x3d',
    'RFB5',
    'VmxT',
    'c2V0VGV4dA\x3d\x3d',
    'V2VIYWNrICB2Mi41',
    'c2V0VGV4dFNpemU\x3d',
    'U3dG',
    'Rmph',
    'b2py',
    'Vktq',
    'd0tx',
    'RkJ0',
    'M3w0fDF8Mnww',
    'UFBO',
    'YWRkVmlldw\x3d\x3d',
    'amtN',
    'VUJD',
    'eWJ0',
    'Qnk6IEZsb2F0RHVzdA\x3d\x3d',
    'IzAwMDAwMA\x3d\x3d',
    'dnhS'
];
(function (_0x20b45b, _0x27439c) {
    var _0x44aef5 = function (_0x57bcc1) {
        while (--_0x57bcc1) {
            _0x20b45b['\x70\x75\x73\x68'](_0x20b45b['\x73\x68\x69\x66\x74']());
        }
    };
    _0x44aef5(++_0x27439c);
}(_0x509f, 0xfd));
var _0xf509 = function (_0x1d56a4, _0x18a461) {
    _0x1d56a4 = _0x1d56a4 - 0x0;
    var _0x5f0fe6 = _0x509f[_0x1d56a4];
    if (_0xf509['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x2e3c6c = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x1171a6 = _0x2e3c6c();
            var _0x3581d0 = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x1171a6['\x61\x74\x6f\x62'] || (_0x1171a6['\x61\x74\x6f\x62'] = function (_0x14de2e) {
                var _0x5553d6 = String(_0x14de2e)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x1ecdac = 0x0, _0x9a7ed2, _0x7a0fe0, _0x9c49fa = 0x0, _0x4154c8 = ''; _0x7a0fe0 = _0x5553d6['\x63\x68\x61\x72\x41\x74'](_0x9c49fa++); ~_0x7a0fe0 && (_0x9a7ed2 = _0x1ecdac % 0x4 ? _0x9a7ed2 * 0x40 + _0x7a0fe0 : _0x7a0fe0, _0x1ecdac++ % 0x4) ? _0x4154c8 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x9a7ed2 >> (-0x2 * _0x1ecdac & 0x6)) : 0x0) {
                    _0x7a0fe0 = _0x3581d0['\x69\x6e\x64\x65\x78\x4f\x66'](_0x7a0fe0);
                }
                return _0x4154c8;
            });
        }());
        _0xf509['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x59581c) {
            var _0x39ae7c = atob(_0x59581c);
            var _0x71ac03 = [];
            for (var _0x5b4ad7 = 0x0, _0x2e7889 = _0x39ae7c['\x6c\x65\x6e\x67\x74\x68']; _0x5b4ad7 < _0x2e7889; _0x5b4ad7++) {
                _0x71ac03 += '\x25' + ('\x30\x30' + _0x39ae7c['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x5b4ad7)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x71ac03);
        };
        _0xf509['\x64\x61\x74\x61'] = {};
        _0xf509['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0xf509['\x64\x61\x74\x61'][_0x1d56a4] === undefined) {
        _0x5f0fe6 = _0xf509['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x5f0fe6);
        _0xf509['\x64\x61\x74\x61'][_0x1d56a4] = _0x5f0fe6;
    } else {
        _0x5f0fe6 = _0xf509['\x64\x61\x74\x61'][_0x1d56a4];
    }
    return _0x5f0fe6;
};
var i = 0x0;
var mod = 0x0;
var jst3 = [
    _0xf509('0x0'),
    '',
    _0xf509('0x1'),
    _0xf509('0x2'),
    _0xf509('0x3'),
    _0xf509('0x4'),
    _0xf509('0x5'),
    _0xf509('0x6'),
    _0xf509('0x7'),
    _0xf509('0x8'),
    _0xf509('0x9')
];
var jst4 = [''];
for (a = 0x0; a < jst3[_0xf509('0xa')]; a++) {
    jst4 = jst4 + jst3[a] + '\x0a';
}
;
var l;
ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
    '\x72\x75\x6e': function () {
        var _0x264cd = {
            '\x6c\x6a\x6f': function _0xaae4ee(_0x1e982d, _0x114b1e) {
                return _0x1e982d == _0x114b1e;
            },
            '\x68\x54\x44': function _0x2e713a(_0x736eb1, _0x20599d) {
                return _0x736eb1(_0x20599d);
            },
            '\x53\x63\x6a': function _0xc6d4cf(_0x1a47e0, _0x245cc6) {
                return _0x1a47e0 + _0x245cc6;
            },
            '\x4a\x56\x54': function _0x2f8c20(_0x8c1be2, _0x24a97c) {
                return _0x8c1be2 == _0x24a97c;
            },
            '\x6c\x71\x70': function _0x5decea(_0x135f01, _0x14f820) {
                return _0x135f01 + _0x14f820;
            },
            '\x64\x54\x73': function _0x37ee48(_0x286867) {
                return _0x286867();
            },
            '\x6b\x53\x45': function _0xfa23b7(_0x361d89, _0x5ec0b7) {
                return _0x361d89 + _0x5ec0b7;
            },
            '\x54\x51\x6c': function _0x35441c(_0x4f6b2c, _0x2bcd3b) {
                return _0x4f6b2c * _0x2bcd3b;
            },
            '\x66\x49\x66': function _0x22d3a6(_0x2f15da, _0x233d39) {
                return _0x2f15da * _0x233d39;
            },
            '\x4b\x52\x6a': function _0x37c5d2(_0x38e48a, _0x194726) {
                return _0x38e48a + _0x194726;
            }
        };
        new android['os'][_0xf509('0xe')]()[_0xf509('0xf')](new java[_0xf509('0xc')][_0xf509('0xd')]({
            '\x72\x75\x6e': function () {
                if (_0x264cd[_0xf509('0x10')](_0x264cd[_0xf509('0x11')](CheckFiles, _0x264cd[_0xf509('0x12')](android['os'][_0xf509('0x13')][_0xf509('0x14')](), _0xf509('0x15'))), ![])) {
                    new java['io'][_0xf509('0x16')](_0x264cd[_0xf509('0x12')](android['os'][_0xf509('0x13')][_0xf509('0x14')](), _0xf509('0x15')))[_0xf509('0x17')]();
                }
                ;
                if (!_0x264cd[_0xf509('0x18')](_0x264cd[_0xf509('0x11')](CheckFiles, _0x264cd[_0xf509('0x19')](android['os'][_0xf509('0x13')][_0xf509('0x14')](), _0xf509('0x1a'))), ![])) {
                    _0x264cd[_0xf509('0x1b')](ui1);
                } else {
                    _0x264cd[_0xf509('0x11')](jslog, jst2);
                    mod = _0x264cd[_0xf509('0x1c')](mod, 0x2);
                    i = _0x264cd[_0xf509('0x1c')](_0x264cd[_0xf509('0x1d')](i, 0xa), _0x264cd[_0xf509('0x1e')](_0x264cd[_0xf509('0x1f')](0x1, i), 0x5));
                    l = -l;
                }
                ;
            }
        }), 0x5dc);
    }
}));
function ui1() {
    var _0x20a863 = {
        '\x63\x4f\x78': function _0xe3114a(_0x323810, _0x486112, _0x36e318, _0xbf44a8, _0x54cfa4, _0x61622e, _0x4c087d, _0x191b33, _0x23360b, _0x304982) {
            return _0x323810(_0x486112, _0x36e318, _0xbf44a8, _0x54cfa4, _0x61622e, _0x4c087d, _0x191b33, _0x23360b, _0x304982);
        },
        '\x52\x7a\x4d': function _0x4ba8d3(_0x4b86cc) {
            return _0x4b86cc();
        },
        '\x6b\x42\x6d': function _0x48bdf0(_0x2c1c80) {
            return _0x2c1c80();
        },
        '\x51\x50\x66': function _0x50a748(_0x5ad5a2, _0x158762, _0x171669, _0x6a70ab, _0x1c95e3, _0x4a946c, _0x4e1246, _0x2b4dd5, _0x53cfd8, _0x50bc0e, _0x2f0aa8, _0x39cd20) {
            return _0x5ad5a2(_0x158762, _0x171669, _0x6a70ab, _0x1c95e3, _0x4a946c, _0x4e1246, _0x2b4dd5, _0x53cfd8, _0x50bc0e, _0x2f0aa8, _0x39cd20);
        },
        '\x76\x4a\x79': function _0x5590f7(_0x437747, _0x14f545, _0x375838, _0x302415, _0x5d13b3) {
            return _0x437747(_0x14f545, _0x375838, _0x302415, _0x5d13b3);
        },
        '\x48\x68\x4f': function _0x6fb4db(_0x5abb6c, _0x5ca5b3) {
            return _0x5abb6c(_0x5ca5b3);
        },
        '\x76\x50\x5a': function _0x437786(_0x28ca76) {
            return _0x28ca76();
        }
    };
    ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
        '\x72\x75\x6e': function () {
            try {
                vn0 = _0x20a863[_0xf509('0x20')](NewView, 'LL', _0x20a863[_0xf509('0x21')](W), _0x20a863[_0xf509('0x22')](H), 'CC', 0x1, 0x0, _0xf509('0x23'), 0x0, null);
                pl0 = _0x20a863[_0xf509('0x24')](NewCDV, 0x2, null, 0x0, vn0, -0x1, -0x1, ![], !![], 'CC', 0x0, 0x0);
                _0x20a863[_0xf509('0x25')](UIFadein, vn0, 0x0, 0x64, 0x1f4);
            } catch (_0x28662d) {
                _0x20a863[_0xf509('0x26')](print, _0x28662d);
            }
        }
    }));
    ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
        '\x72\x75\x6e': function () {
            new android['os'][_0xf509('0xe')]()[_0xf509('0xf')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                '\x72\x75\x6e': function () {
                    _0x20a863[_0xf509('0x27')](ui2);
                }
            }), 0x3e8);
        }
    }));
}
;
function ui2() {
    var _0x1b673c = {
        '\x53\x77\x46': function _0x482d78(_0x191745, _0xc825a9, _0x156397, _0x710d68, _0xc2dd58) {
            return _0x191745(_0xc825a9, _0x156397, _0x710d68, _0xc2dd58);
        },
        '\x46\x6a\x61': function _0xed7d71(_0x2d5d69, _0x568950, _0x33ee2a, _0x2b6708, _0x26721b, _0x2067b4, _0x191d1c, _0x5fc83e, _0x15e076, _0x46f61c, _0x260cce, _0x5a6f9b) {
            return _0x2d5d69(_0x568950, _0x33ee2a, _0x2b6708, _0x26721b, _0x2067b4, _0x191d1c, _0x5fc83e, _0x15e076, _0x46f61c, _0x260cce, _0x5a6f9b);
        },
        '\x6f\x6a\x72': function _0x520a7f(_0x12ac06, _0x13245d, _0x9f1b4b, _0x364ad1, _0x20f8a5, _0x129dd8, _0xbe81ed, _0x1f9158, _0x2f85fb, _0x406ff4) {
            return _0x12ac06(_0x13245d, _0x9f1b4b, _0x364ad1, _0x20f8a5, _0x129dd8, _0xbe81ed, _0x1f9158, _0x2f85fb, _0x406ff4);
        },
        '\x56\x4b\x6a': function _0x2ff351(_0x50516a) {
            return _0x50516a();
        },
        '\x77\x4b\x71': function _0x146391(_0x9069b9, _0xbec3ce) {
            return _0x9069b9(_0xbec3ce);
        },
        '\x46\x42\x74': function _0x2fe1e2(_0xd4e625, _0x45e972, _0x5a7796, _0x548c1d, _0x30053b) {
            return _0xd4e625(_0x45e972, _0x5a7796, _0x548c1d, _0x30053b);
        }
    };
    var _0x3fde84 = _0xf509('0x28')[_0xf509('0x29')]('\x7c'), _0x1efa0f = 0x0;
    while (!![]) {
        switch (_0x3fde84[_0x1efa0f++]) {
        case '0':
            ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                '\x72\x75\x6e': function () {
                    new android['os'][_0xf509('0xe')]()[_0xf509('0xf')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                        '\x72\x75\x6e': function () {
                            var _0x1adac3 = {
                                '\x44\x50\x79': function _0x3cfda2(_0x52eb46, _0x4d66e3, _0x130b02, _0x29ba18, _0x562dca) {
                                    return _0x52eb46(_0x4d66e3, _0x130b02, _0x29ba18, _0x562dca);
                                },
                                '\x56\x6c\x53': function _0x230052(_0x4d572e) {
                                    return _0x4d572e();
                                }
                            };
                            var _0x430c35 = _0xf509('0x28')[_0xf509('0x29')]('\x7c'), _0x371727 = 0x0;
                            while (!![]) {
                                switch (_0x430c35[_0x371727++]) {
                                case '0':
                                    _0x1adac3[_0xf509('0x2a')](UIFadein, vn1, 0x0, 0x64, 0x3e8);
                                    continue;
                                case '1':
                                    _0x1adac3[_0xf509('0x2b')](sea);
                                    continue;
                                case '2':
                                    _0x1adac3[_0xf509('0x2b')](web);
                                    continue;
                                case '3':
                                    t1[_0xf509('0x2c')](_0xf509('0x2d'));
                                    continue;
                                case '4':
                                    t1[_0xf509('0x2e')](0x1c);
                                    continue;
                                }
                                break;
                            }
                        }
                    }), 0xcb2);
                }
            }));
            continue;
        case '1':
            var _0x471d36 = {
                '\x50\x50\x4e': function _0x4a00e6(_0x3093a0, _0x2c8785, _0x373185, _0x3480ef, _0x113b83) {
                    return _0x1b673c[_0xf509('0x2f')](_0x3093a0, _0x2c8785, _0x373185, _0x3480ef, _0x113b83);
                },
                '\x6a\x6b\x4d': function _0x583255(_0x528584, _0x5b2338, _0x32f0c3, _0x30224c, _0x43cc55, _0x19369a, _0x3f4d15, _0x35205c, _0x5d0ac1, _0x304f03, _0x3a0265, _0x271725) {
                    return _0x1b673c[_0xf509('0x30')](_0x528584, _0x5b2338, _0x32f0c3, _0x30224c, _0x43cc55, _0x19369a, _0x3f4d15, _0x35205c, _0x5d0ac1, _0x304f03, _0x3a0265, _0x271725);
                },
                '\x55\x42\x43': function _0x40e902(_0xf80881, _0x45b9d9, _0x457ee1, _0x484266, _0x3d7d6d, _0x210c66, _0x2838f7, _0x58e077, _0x52bdc0, _0xa60afc) {
                    return _0x1b673c[_0xf509('0x31')](_0xf80881, _0x45b9d9, _0x457ee1, _0x484266, _0x3d7d6d, _0x210c66, _0x2838f7, _0x58e077, _0x52bdc0, _0xa60afc);
                },
                '\x79\x62\x74': function _0x40636a(_0x5060e8) {
                    return _0x1b673c[_0xf509('0x32')](_0x5060e8);
                },
                '\x76\x78\x52': function _0x2abc4b(_0x415a23, _0x252904) {
                    return _0x1b673c[_0xf509('0x33')](_0x415a23, _0x252904);
                },
                '\x51\x7a\x76': function _0x4800b0(_0x3df6f3, _0x592210, _0x38fd36, _0x29510e, _0x2a060b) {
                    return _0x1b673c[_0xf509('0x34')](_0x3df6f3, _0x592210, _0x38fd36, _0x29510e, _0x2a060b);
                }
            };
            continue;
        case '2':
            ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                '\x72\x75\x6e': function () {
                    try {
                        var _0x144954 = _0xf509('0x35')[_0xf509('0x29')]('\x7c'), _0xf8d4e1 = 0x0;
                        while (!![]) {
                            switch (_0x144954[_0xf8d4e1++]) {
                            case '0':
                                _0x471d36[_0xf509('0x36')](UIFadein, vn1, 0x0, 0x64, 0x3e8);
                                continue;
                            case '1':
                                vn1[_0xf509('0x37')](t1);
                                continue;
                            case '2':
                                pl1 = _0x471d36[_0xf509('0x38')](NewCDV, 0x2, null, 0x0, vn1, -0x1, -0x1, ![], !![], 'CC', 0x0, 0x0);
                                continue;
                            case '3':
                                vn1 = _0x471d36[_0xf509('0x39')](NewView, 'LL', _0x471d36[_0xf509('0x3a')](W), _0x471d36[_0xf509('0x3a')](H), 'CC', 0x1, 0x2, null, 0x0, null);
                                continue;
                            case '4':
                                t1 = _0x471d36[_0xf509('0x36')](NewText, _0xf509('0x3b'), 'CC', 0x12, _0xf509('0x3c'));
                                continue;
                            }
                            break;
                        }
                    } catch (_0x43051a) {
                        _0x471d36[_0xf509('0x3d')](print, _0x43051a);
                    }
                }
            }));
            continue;
        case '3':
            ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                '\x72\x75\x6e': function () {
                    new android['os'][_0xf509('0xe')]()[_0xf509('0xf')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                        '\x72\x75\x6e': function () {
                            _0x471d36[_0xf509('0x3e')](UIFadein, vn1, 0x64, 0x0, 0x3e8);
                        }
                    }), 0x7d0);
                }
            }));
            continue;
        case '4':
            ctx[_0xf509('0xb')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                '\x72\x75\x6e': function () {
                    new android['os'][_0xf509('0xe')]()[_0xf509('0xf')](new java[_0xf509('0xc')][_0xf509('0xd')]({
                        '\x72\x75\x6e': function () {
                            t1[_0xf509('0x2c')]('');
                        }
                    }), 0xbb8);
                }
            }));
            continue;
        }
        break;
    }
}
;


var _0xda74 = [
    'dUpu',
    'QXdQ',
    'c2V0T25DbGlja0xpc3RlbmVy',
    'dmlldw\x3d\x3d',
    'Vmlldw\x3d\x3d',
    'T25DbGlja0xpc3RlbmVy',
    'UE9a',
    'RlRa',
    'VGJH',
    'UFRC',
    'YWRkVmlldw\x3d\x3d',
    'SHJR',
    'ZGlzbWlzcw\x3d\x3d',
    'aXNu',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'MnwxfDB8NHwz',
    'c3BsaXQ\x3d',
    'cnpZ',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'Tlh3',
    'aXFZ',
    'NHwzfDF8NXwyfDA\x3d',
    'a2ln',
    'bkxK',
    'bUti',
    'WXJI',
    'Ulpw',
    'IzExZmZmZmZm',
    'I2ZmZmZmZmZm',
    'cFBG'
];
(function (_0x53884f, _0x59d739) {
    var _0x4d077a = function (_0x49bace) {
        while (--_0x49bace) {
            _0x53884f['\x70\x75\x73\x68'](_0x53884f['\x73\x68\x69\x66\x74']());
        }
    };
    _0x4d077a(++_0x59d739);
}(_0xda74, 0x116));
var _0x4da7 = function (_0x2d1b14, _0x320f15) {
    _0x2d1b14 = _0x2d1b14 - 0x0;
    var _0x51729d = _0xda74[_0x2d1b14];
    if (_0x4da7['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x58e38f = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x99af6d = _0x58e38f();
            var _0x5c90f4 = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x99af6d['\x61\x74\x6f\x62'] || (_0x99af6d['\x61\x74\x6f\x62'] = function (_0x285759) {
                var _0x431e5e = String(_0x285759)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0xa61bb4 = 0x0, _0x3dc396, _0x33148b, _0x17d947 = 0x0, _0x1956b6 = ''; _0x33148b = _0x431e5e['\x63\x68\x61\x72\x41\x74'](_0x17d947++); ~_0x33148b && (_0x3dc396 = _0xa61bb4 % 0x4 ? _0x3dc396 * 0x40 + _0x33148b : _0x33148b, _0xa61bb4++ % 0x4) ? _0x1956b6 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x3dc396 >> (-0x2 * _0xa61bb4 & 0x6)) : 0x0) {
                    _0x33148b = _0x5c90f4['\x69\x6e\x64\x65\x78\x4f\x66'](_0x33148b);
                }
                return _0x1956b6;
            });
        }());
        _0x4da7['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x98e7c9) {
            var _0x2e7003 = atob(_0x98e7c9);
            var _0xb1f296 = [];
            for (var _0x2e0afa = 0x0, _0x5c2742 = _0x2e7003['\x6c\x65\x6e\x67\x74\x68']; _0x2e0afa < _0x5c2742; _0x2e0afa++) {
                _0xb1f296 += '\x25' + ('\x30\x30' + _0x2e7003['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x2e0afa)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0xb1f296);
        };
        _0x4da7['\x64\x61\x74\x61'] = {};
        _0x4da7['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x4da7['\x64\x61\x74\x61'][_0x2d1b14] === undefined) {
        _0x51729d = _0x4da7['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x51729d);
        _0x4da7['\x64\x61\x74\x61'][_0x2d1b14] = _0x51729d;
    } else {
        _0x51729d = _0x4da7['\x64\x61\x74\x61'][_0x2d1b14];
    }
    return _0x51729d;
};
function sea() {
    var _0x45ed6a = {
        '\x50\x4f\x5a': function _0x4fbd2a(_0x4e94ba, _0x27943e) {
            return _0x4e94ba == _0x27943e;
        },
        '\x69\x71\x59': function _0xa1cf65(_0x3d3ec8, _0x4eab10) {
            return _0x3d3ec8 * _0x4eab10;
        }
    };
    ctx[_0x4da7('0x0')](new java[_0x4da7('0x1')][_0x4da7('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x2c47b3 = {
                '\x72\x7a\x59': function _0x11e7f9(_0x6e217d, _0x10b35a) {
                    return _0x6e217d < _0x10b35a;
                },
                '\x6b\x69\x67': function _0x15d581(_0x446119, _0x5ec0cc, _0x53e276, _0x203bcd, _0x298f76) {
                    return _0x446119(_0x5ec0cc, _0x53e276, _0x203bcd, _0x298f76);
                },
                '\x6e\x4c\x4a': function _0x3a4f9a(_0xf0460, _0x277ec1, _0x5b5288, _0x55ddc4, _0x40ad78, _0x43d030, _0x3b5965, _0xb091f0, _0x1ab271, _0x13e9c6) {
                    return _0xf0460(_0x277ec1, _0x5b5288, _0x55ddc4, _0x40ad78, _0x43d030, _0x3b5965, _0xb091f0, _0x1ab271, _0x13e9c6);
                },
                '\x6d\x4b\x62': function _0x5cc3bb(_0x1b619d, _0xc26c38) {
                    return _0x1b619d * _0xc26c38;
                },
                '\x59\x72\x48': function _0x327223(_0x3d074e) {
                    return _0x3d074e();
                },
                '\x52\x5a\x70': function _0x1b2a14(_0x451865, _0x54401d) {
                    return _0x451865 * _0x54401d;
                },
                '\x70\x50\x46': function _0x30f0c7(_0x5adeed, _0x2bd43b, _0x29d844, _0x58cfe4, _0x34379b, _0x439e39, _0x58fee2, _0x40bf71, _0x5bdb9a, _0x3e99cf, _0xb29268, _0x536199) {
                    return _0x5adeed(_0x2bd43b, _0x29d844, _0x58cfe4, _0x34379b, _0x439e39, _0x58fee2, _0x40bf71, _0x5bdb9a, _0x3e99cf, _0xb29268, _0x536199);
                },
                '\x75\x4a\x6e': function _0x2b32a0(_0x17bba6, _0x36907b) {
                    return _0x17bba6 * _0x36907b;
                },
                '\x41\x77\x50': function _0x48258d(_0x20dbb6) {
                    return _0x20dbb6();
                },
                '\x46\x54\x5a': function _0x2831c7(_0x39e530) {
                    return _0x39e530();
                },
                '\x54\x62\x47': function _0x3394ae(_0x13016e, _0x21ae45) {
                    return _0x13016e * _0x21ae45;
                },
                '\x50\x54\x42': function _0x2292ce(_0x3eeb4b) {
                    return _0x3eeb4b();
                },
                '\x48\x72\x51': function _0x33819e(_0x1cc67c, _0x3043bb) {
                    return _0x1cc67c(_0x3043bb);
                }
            };
            var _0x28a6d0 = _0x4da7('0x3')[_0x4da7('0x4')]('\x7c'), _0x1dff63 = 0x0;
            while (!![]) {
                switch (_0x28a6d0[_0x1dff63++]) {
                case '0':
                    for (a = 0x1; _0x2c47b3[_0x4da7('0x5')](a, 0x5); a++) {
                        ctx[_0x4da7('0x0')](new java[_0x4da7('0x1')][_0x4da7('0x2')]({
                            '\x72\x75\x6e': function () {
                                new android['os'][_0x4da7('0x6')]()[_0x4da7('0x7')](new java[_0x4da7('0x1')][_0x4da7('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        _0x5c9970[_0x4da7('0x8')](UILevel, se2, -0x64, 0x578, 0x3e8);
                                    }
                                }), _0x45ed6a[_0x4da7('0x9')](0x5dc, a));
                            }
                        }));
                    }
                    continue;
                case '1':
                    try {
                        var _0x5280d1 = _0x4da7('0xa')[_0x4da7('0x4')]('\x7c'), _0x34f0fb = 0x0;
                        while (!![]) {
                            switch (_0x5280d1[_0x34f0fb++]) {
                            case '0':
                                _0x2c47b3[_0x4da7('0xb')](UILevel, se2, -0x64, 0x578, 0x3e8);
                                continue;
                            case '1':
                                se2 = _0x2c47b3[_0x4da7('0xc')](NewView, 'LL', _0x2c47b3[_0x4da7('0xd')](_0x2c47b3[_0x4da7('0xe')](W), 0.05), _0x2c47b3[_0x4da7('0xf')](_0x2c47b3[_0x4da7('0xe')](H), 0.2), 'CC', 0x1, 0x1, [
                                    'LR',
                                    _0x4da7('0x10'),
                                    _0x4da7('0x11')
                                ], 0x0, null);
                                continue;
                            case '2':
                                sc1 = _0x2c47b3[_0x4da7('0x12')](NewCDV, 0x2, null, 0x0, se1, _0x2c47b3[_0x4da7('0x13')](_0x2c47b3[_0x4da7('0x14')](W), 0.7), _0x2c47b3[_0x4da7('0x13')](_0x2c47b3[_0x4da7('0x14')](H), 0.2), ![], !![], 'CC', 0x0, 0x0);
                                continue;
                            case '3':
                                se1[_0x4da7('0x15')](new android[_0x4da7('0x16')][_0x4da7('0x17')][_0x4da7('0x18')]({
                                    '\x6f\x6e\x43\x6c\x69\x63\x6b': function (_0x4d0f2b) {
                                        i++;
                                        if (_0x45ed6a[_0x4da7('0x19')](i, 0x5) && _0x45ed6a[_0x4da7('0x19')](l, -0x1)) {
                                            mod = 0x1;
                                        }
                                    }
                                }));
                                continue;
                            case '4':
                                se1 = _0x2c47b3[_0x4da7('0xc')](NewView, 'LL', _0x2c47b3[_0x4da7('0x13')](_0x2c47b3[_0x4da7('0x1a')](W), 0.7), _0x2c47b3[_0x4da7('0x1b')](_0x2c47b3[_0x4da7('0x1c')](H), 0.2), 'LR', 0x1, 0x2, null, 0x0, null);
                                continue;
                            case '5':
                                se1[_0x4da7('0x1d')](se2);
                                continue;
                            }
                            break;
                        }
                    } catch (_0x956095) {
                        _0x2c47b3[_0x4da7('0x1e')](print, _0x956095);
                    }
                    continue;
                case '2':
                    var _0x5c9970 = {
                        '\x4e\x58\x77': function _0x5ed2fc(_0x4fa907, _0x499a8b, _0xa9a638, _0x123f37, _0x245d86) {
                            return _0x2c47b3[_0x4da7('0xb')](_0x4fa907, _0x499a8b, _0xa9a638, _0x123f37, _0x245d86);
                        },
                        '\x69\x73\x6e': function _0xb184b8(_0x1b9fd5, _0x21c415) {
                            return _0x2c47b3[_0x4da7('0x1e')](_0x1b9fd5, _0x21c415);
                        }
                    };
                    continue;
                case '3':
                    ctx[_0x4da7('0x0')](new java[_0x4da7('0x1')][_0x4da7('0x2')]({
                        '\x72\x75\x6e': function () {
                            new android['os'][_0x4da7('0x6')]()[_0x4da7('0x7')](new java[_0x4da7('0x1')][_0x4da7('0x2')]({
                                '\x72\x75\x6e': function () {
                                    sc1[_0x4da7('0x1f')]();
                                    _0x5c9970[_0x4da7('0x20')](jslog, jst4);
                                }
                            }), 0x1b58);
                        }
                    }));
                    continue;
                case '4':
                    ;
                    continue;
                }
                break;
            }
        }
    }));
}
;

function web(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
	try{
		se5=NewView("LL",-1,H()*0.5,"CC",1,2,null,null,null);
			se6=NewView("LL",H()*0.2,H()*0.2,"CC",1,2,null,null,null);
			var webv = new android.webkit.WebView(ctx);
				webv.loadUrl("https://m.gitee.com/fddata/SkyWars-Simulator.js/raw/0b92aa1516834117daf9466ebce668fae5b31af6/win10.gif");
		webv.setOnLongClickListener(new android.view.View.OnLongClickListener(){onLongClick:
				function(v){
					l--;
				return true;
				}});
		se5.addView(se6);
			se6.addView(webv);
		sc3=NewCDV(2,null,0,se5,-1,H()*0.5,false,true,"CB",0,0);
		UIFadein(se5, 0, 100, 500);
	}catch(err){print(err)}
ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
	new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
		sc3.dismiss();
	}}),7000) }}));
	}}));
};


var _0xff02 = [
    'IzEwOTY5Njk2',
    'YWRkVmlldw\x3d\x3d',
    'RUVS',
    'VWNx',
    'eXpt',
    'Zmh4',
    'a1Bu',
    'VFRX',
    'cVND',
    'c0lY',
    'SE5D',
    'I0ZGRkZGRg\x3d\x3d',
    'bXJk',
    'VGNs',
    'R2dE',
    'QlVk',
    'bHFR',
    'YndS',
    'ZlN5',
    'T2RS',
    'SU9J',
    'bUpV',
    'Y0dQ',
    'dldk',
    'Y2Zq',
    'dHBW',
    'UnBY',
    'V0ggfCDlvq7nq68g4oCiIA\x3d\x3d',
    'IzAwMDAwMA\x3d\x3d',
    'Y1NH',
    'VHZB',
    'c1pp',
    'QmpY',
    'Q3Vz',
    'bm15',
    'ZFFC',
    'S25r',
    'N3wwfDZ8M3w0fDF8Mnw4fDU\x3d',
    'Q1FI',
    'Mnw1fDN8N3wxMHwwfDEzfDZ8OXw0fDEyfDExfDh8MQ\x3d\x3d',
    'UXh3',
    'bGpS',
    'WndN',
    'Vm5l',
    'ckVK',
    'VVJU',
    'T0x4',
    'RkN2',
    'ZmRm',
    'S1R0',
    'Wkpi',
    'dVZF',
    'a1BI',
    'R3lQ',
    'b3VE',
    'anhQ',
    'THVa',
    'ZUVV',
    'I2ZmZDhmZmY5',
    'I2ZmZWZmZmQ4',
    'RUN6',
    'SmFI',
    'VVBK',
    'elhv',
    'T3lm',
    'd05m',
    'Wmtt',
    'Q0xp',
    'VVdw',
    'IzRiZmZmZmZm',
    'dm9L',
    'R2N4',
    'YW5Z',
    'S05I',
    'elpa',
    'dmFU',
    'WVNP',
    'c3VU',
    'dXpx',
    'SG5w',
    'bXlB',
    'dlB1',
    '5qyi6L\x2bO5L2\x2f55SoV2VIYWNrLU1YIHYyLjXvvIzku6XkuIvmmK\x2fnm7jlhbPkvb\x2fnlKjor7TmmI7vvIzor7fmgonnn6XjgII\x3d',
    '5LiA5YiH5L2\x2f55So6K\x2b05piO6YO95Zyo5q2k5YaZ5piO5LqG77yM5LiN5oeC6K\x2b35p\x2bl6ZiF44CC6K\x2bl566A5LuL5LiT5rK75ZCE56eN5LiN5pyN44CC',
    '4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU',
    'IzAg5pu05paw5YWs5ZGKI\x2b\x2b8mg\x3d\x3d',
    'ICDlsYXnhLbmnInkurror7Tku6PnoIHmmK\x2fmioTliKvkurrnmoTvvJ\x2fov5jmnInkurror7TkuI3mmK\x2fljp\x2fliJvnmoTvvJ\x2flnKjmraTor7TmmI7vvIzor6XotYTmupDlrozlhajljp\x2fliJvvvIzpg6jliIbliKvkurrnmoTku6PnoIHml6nlsLHlvpfliLDlr7nmlrnnmoTmjojmnYPkuobvvIE\x3d',
    'IzEg5YWz5LqO5q2kSnMj77ya',
    'ICDor6XotYTmupDnsbvkvLzkuo7ooaXkuIHvvIzkuI3mmK\x2flpKflnotH44CC5byAR\x2bacieW6pu\x2b8jOeUqOS6juWBmuWlveS6i\x2bS8muW\x2bl\x2bWIsOaUr\x2baMgeOAguasoui\x2fjuWKoOWFpU1D57KJ5Lid576k77yM576k5Y\x2b3NDgwNzU3NDg1',
    'IzIg5L2\x2f55So5aOw5piOI\x2b\x2b8mg\x3d\x3d',
    'ICDor6XotYTmupDkuLrkuK3lm73niYjlrprliLbotYTmupDvvIzlm73pmYXniYjpg6jliIblip\x2fog73kuI3lj6\x2fnlKjjgILkvb\x2fnlKjor6XotYTmupDluKbmnaXnmoTkuIDliIflkI7mnpzljp\x2fkvZzogIXkuI3otJ\x2fkuIDliIfotKPku7s\x3d',
    '4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU',
    'IzMg5L2\x2f55So6K\x2b05piOI\x2b\x2b8mg\x3d\x3d',
    'ICAgIOKXjyDoj5zljZXlpITnkIYg4peP',
    'ICAxLueCueWHu\x2bWPs\x2bS4iuinkueahOKAnFdI4oCd5oyJ6ZKu5Y\x2bv5ouJ5byA5oq95bGJ',
    'ICAyLueCueWHu\x2bKAnO\x2b4veKAneaMiemSruWPr\x2bWFs\x2bmXreaKveWxieWPiuWIhuaUr1VJ',
    'ICAgIOKXjyDlip\x2fog73nroDku4sg4peP',
    'ICDvvZxFbnRpdHnlrp7kvZPmjqfliLYgLSDnianlk4Hmt7vliqDvvJo\x3d',
    'ICAgIC3kvb\x2fnlKjliY3or7fnoa7kv53miYvkuIrmsqHmnInph43opoHnianlk4HvvIzlkKbliJnkvJrmuIXnqbo\x3d',
    'ICAgIC3ngrnlh7vlv6vmjbfmjInpkq7mt7vliqDnianlk4HvvIzmt7vliqDlkI7or7fmiZPlvIDog4zljIXlsIbnianlk4HmlL7lnKjlkIjmiJDmoI\x2flho3mi7\x2flh7rmnaU\x3d',
    'ICAgIC1JROihqOeUsWh0dHA6Ly9tYy56eXlhcHAuY29t5o\x2bQ5L6b77yM5omT5byA5pe25Y\x2bv6IO95pi\x2b56S656m655m977yM56iN562J5Y2z5Y\x2bv',
    'ICDvvZxFbnRpdHnlrp7kvZPmjqfliLYgLSDnianlk4HpmYTprZQ\x3d',
    'ICAgIC3miYvmjIHmrablmagv6KOF5aSH77yM6YCJ5oup5a\x2b55bqU6ZmE6a2U57G75Z6L6L\x2bb6KGM5LiA6ZSu6ZmE6a2U',
    'ICAgIC3ngrnlh7vmjInpkq7pmYTprZTlkI7vvIzmiZPlvIDog4zljIXvvIzlsIbpmYTprZTnmoTnianlk4HmlL7lnKjlkIjmiJDmoI\x2flho3mi7\x2flh7rljbPlj6\x2fkvb\x2fnlKg\x3d',
    'ICAgIC3lvq7nq68yLjPniYjmnKzku6XkuIrlt7LpgILphY3kuK3lm73niYh2MS4xMg\x3d\x3d',
    'ICDvvZxFbnRpdHnlrp7kvZPmjqfliLYgLSDoja\x2fmsLTmlYjmnpzvvJo\x3d',
    'ICAgIC3pgInmi6nlr7nlupTnsbvlnovov5vooYzmt7vliqDvvIzmgKXov6vkuLoyNTXnuqfvvIzlpJzop4blj4rot7Pot4Pmj5DljYfkuLoy57qn',
    'ICAgIC3nlLHkuo7lj6rmnInot7Pot4PjgIHlpJzop4bjgIHmgKXov6vmlYjmnpzmnInmlYjvvIzliKvnmoTpg73nlKjkuI3kuobvvIzmiYDku6XpgInpobnlvojlsJE\x3d',
    'ICDvvZxCZWhhdmlvcueOqeWutuihjOS4uiAtIOeOqeWutuS8oOmAge\x2b8mg\x3d\x3d',
    'ICAgIC3ngrnlh7vmjInpkq7vvIzlsLHog73liJflh7rmnI3liqHlmajnjqnlrrbvvIzngrnlh7vnjqnlrrblsLHog73kvKDpgIHliLDku5bnmoTkvY3nva4\x3d',
    'ICAgIC3liJfkuI3lh7rnjqnlrrbmmK\x2flkK\x2fliqjlmahCdWfvvIzph43nva7mnI3liqHlmajmlbDmja7ljbPlj68\x3d',
    'ICDvvZxCZWhhdmlvcueOqeWutuihjOS4uiAtIOiZmuepuuWbnuW8uQ\x3d\x3d',
    'ICAgIC3njqnlrrbmjonomZrnqbrmiJbpq5jlpITokL3kuIvml7bvvIzkvJroh6rliqjov5Tlm57kuIrmlrnlubPlj7DjgILpg6jliIbmnI3liqHlmajkvJrliKTlrprkuLrnnqznp7vvvIznlJroh7PliKTlrprkuLrpo57ooYzogIzooqtiYW4\x3d',
    'ICDvvZxGdW5jdGlvbuWKn\x2biDveWIl\x2bihqCAtIOiEmuacrOWvvOWFpQ\x3d\x3d',
    'ICAgIC3or7flsIbkvaDopoHlr7zlhaXnmoRqc\x2baWh\x2bS7tuaUvuWcqCcnbWN0b29scy9zY3JpcHRzLycn5paH5Lu25aS577yM5omN6IO96K\x2b75Y\x2bW77yM5aaC5p6c5rKh55yL5YiwJydzY3JpcHRzJyfmlofku7blpLnor7foh6rlt7HliJvlu7rkuIDkuKo\x3d',
    'ICAgIC3pgInmi6nliJfooajmlofku7blkI7ngrnlh7vljbPlj6\x2flr7zlhaXvvIzlj6rog73lr7zlhaVqc\x2baWh\x2bS7tu\x2b8jOS9huS4jeaUr\x2baMgeeijuaipuiAheOAgU1hdHJpeOetiemDqOWIhmpz44CC5a\x2b85YWl5ZCO5peg5rOV5Y245LiL77yM6Zmk6Z2e5L2g6YeN5ZCv5ri45oiP',
    'ICDvvZxGdW5jdGlvbuWKn\x2biDveWIl\x2bihqCAtIOeUn\x2beJqeaYvuihgA\x3d\x3d',
    'ICAgIC3mmL7ooYDmjIfpkojmiYDlr7nlrp7kvZPooYDph4\x2fvvIzmnI3liqHlmajosozkvLzml6DmlYg\x3d',
    'ICDvvZxGdW5jdGlvbuWKn\x2biDveWIl\x2bihqCAtIE1peOeykuWtkA\x3d\x3d',
    'ICAgIC3ku4Xoh6rlt7Hlj6\x2fop4E\x3d',
    'ICAgIC3nspLlrZAxOumfs\x2bespuihjOi1sOi9qOi\x2fue\x2b9nOeykuWtkDI65bKp5rWG5YWr6IqS5pif6Zi1772c57KS5a2QMzrnu7\x2fojLXlj4zonrrml4vliIflibLvvZznspLlrZA0OueBq\x2beDn\x2bmbvueIhueCuOWkluaJqeWchueQgw\x3d\x3d',
    'IzQg5pu05paw5YaF5a65I\x2b\x2b8mg\x3d\x3d',
    'djIuMyA\x2bIHYyLjUgfCAxOTA0MTM\x3d',
    'MS7orr7orqHkuobmlrDnmoRVSeOAgVVJ5biD5bGA5L\x2bu5pS5',
    'Mi7nianlk4Hmt7vliqDvvJrkv67lpI3pg6jliIbmnLrlnovlhbPkuI3mjonnlYzpnaLnmoTpl67popjjgIHnibnmrorlgLzpu5jorqTorr7nva7kuLow',
    'My7pmYTprZTnvJbovpHvvJrmt7vliqDpkpPnq7\x2fpmYTprZTmlYjmnpzjgIHmt7vliqDmsLTkuIvlkbzlkLjvvIzmt7HmtbfmjqLntKLogIXvvIzmkZTokL3kv53miqTnrYnmlYjmnpw\x3d',
    'NC7oja\x2fmsLTmlYjmnpzvvJrmlYjmnpzmjIHnu63ml7bpl7Tlu7bplb\x2foh7MxMOWIhumSn\x2bOAgea3u\x2bWKoOa4hemZpOaViOaenOWKn\x2biDvQ\x3d\x3d',
    'NS7omZrnqbrlm57lvLnvvJrpgILlvZPosIPmlbTlj7LojrHlp4bmlYjmnpw\x3d',
    'Li4u',
    'djIuMCA\x2bIHYyLjMgfCAxOTA0MDY\x3d',
    'MS7kv67lpI3omZrnqbrlm57lvLnpl6rpgIDpl67popjjgIHkvJjljJblm57lvLnmnLrliLY\x3d',
    'djEuNCA\x2bIHYyLjAgfCAxOTA0MDI\x3d',
    'MS7orr7orqHkuoblhajmlrDnmoTnlYzpnaLvvIzngbDnmb3oibLnmoTorr7orqHpo47moLzvvIzmm7TnroDnuqbogIzkuI3mmK\x2foirHph4zog6Hkv48\x3d',
    '5paH5Lu25qCh6aqM56CB77ya',
    'WEhVd01EVTNYSFV3TURZMVhIVXdNRE15WEhVd01ESmxYSFV3TURNMQ\x3d\x3d',
    'bGVuZ3Ro',
    'QVF6',
    'QkR4',
    'Sk5B',
    'V3dB',
    'MTJ8MTN8MnwxNHwxN3w4fDE2fDB8M3w3fDEwfDl8NXwxMXwxNXw0fDZ8MQ\x3d\x3d',
    'clN2',
    'TU5x',
    'cnBn',
    'Vkxw',
    'eFZM',
    'SEJk',
    'IzgwZmZmZmZm',
    'd2hV',
    'cm1F',
    'Y2ZM',
    'TmtR',
    'eU1Z',
    'SXJk',
    'YmNN',
    'YXFW',
    'a0JQ',
    'NHwwfDF8M3w1fDd8Nnw4fDI\x3d',
    'eWVL',
    'Rm9K',
    '5qyi6L\x2bO5L2\x2f55So77yB54K55Ye7JydXSCcn5omT5byA5oq95bGJID4\x3d',
    '5b6u56uv5o\x2bQ6YaS5oKo77ya6YCJ5oup5Y2D5LiH5p2h77yM5a6J5YWo56ys5LiA5p2h77yM6KGM5Li65LiN6KeE6IyD77yM6LSm5Y\x2b35Lik6KGM5rOq77yB',
    'U0t6',
    'aGtG',
    'ZWZB',
    'c2V0QmFja2dyb3VuZA\x3d\x3d',
    'UnpN',
    'SU5P',
    'YXVJ',
    'QkFZ',
    'em1i',
    'SlpO',
    'Vk9O',
    '5Y6f5L2c6ICFUTogOTIxNjk2MjE2IOe7neWvueiHquWItgrvvZzlhY3otLnotYTmupDvvIzli7\x2fooqvkuozmlLnni5fpqpfvvZw\x3d',
    'bW9qYW5n',
    'bWluZWNyYWZ0cGU\x3d',
    'TWFpbkFjdGl2aXR5',
    'Y3VycmVudE1haW5BY3Rpdml0eQ\x3d\x3d',
    'Z2V0',
    'ZmluaXNo',
    '5p2D6ZmQ5pyJ6K\x2bv77yB',
    'd1ZH',
    'TnJD',
    'dHR3',
    'd1l4',
    'UExy',
    'bFlC',
    'aldJ',
    'c25T',
    'TkJS',
    'TFFP',
    'RW52aXJvbm1lbnQ\x3d',
    'Z2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5',
    'L21jdG9vbHMvanNjYWNoZTIuNQ\x3d\x3d',
    'RmlsZQ\x3d\x3d',
    'Y3JlYXRlTmV3RmlsZQ\x3d\x3d',
    'V2Fq',
    'bUhQ',
    '5oKo55qE5paH5Lu25p2l5rqQ6Z2e5rOV77yM5rKh5pyJ5b6X5Yiw5Y6f5L2c6ICF5YWB6K646L2s5Y\x2bR55qE5p2D6ZmQ',
    'Vmd1',
    'IzY0ZmZmZmZm',
    'dVdj',
    'S2FJ',
    'bWxq',
    'cGhQ',
    'UHZy',
    'bW1k',
    'VEl6',
    'VkNr',
    'UXhm',
    'Wlhy',
    'THRN',
    'I2ZmYTdmZmQ4',
    'I2ZmZmZkM2Y4',
    'QlNE',
    'dFlu',
    'SGFB',
    'IzExOTA5MDkw',
    'T3By',
    'c1ZY',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'OHw0fDd8MXwzfDV8MHw2fDI\x3d',
    'c3BsaXQ\x3d',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'dGtX',
    'Yk5Z',
    'bGt3',
    'cUJZ',
    'elRp',
    'ZGlzbWlzcw\x3d\x3d',
    'TnRk',
    'RUx2',
    'MTB8MTN8N3w4fDl8MHwxMnwzfDJ8MTF8Nnw0fDF8NQ\x3d\x3d',
    'Q0h6',
    'a2p6',
    'WGNQ',
    'VXpy',
    'cG1j',
    'IzVhOTY5Njk2'
];
(function (_0x223725, _0x316977) {
    var _0x449ceb = function (_0x313fce) {
        while (--_0x313fce) {
            _0x223725['\x70\x75\x73\x68'](_0x223725['\x73\x68\x69\x66\x74']());
        }
    };
    _0x449ceb(++_0x316977);
}(_0xff02, 0x1ce));
var _0x2ff0 = function (_0x464831, _0xe10887) {
    _0x464831 = _0x464831 - 0x0;
    var _0x591e3f = _0xff02[_0x464831];
    if (_0x2ff0['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0xb31e84 = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x34209e = _0xb31e84();
            var _0x237ebc = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x34209e['\x61\x74\x6f\x62'] || (_0x34209e['\x61\x74\x6f\x62'] = function (_0x27ab3e) {
                var _0x37585d = String(_0x27ab3e)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x4b8a0e = 0x0, _0xbfb0a6, _0x38e4f2, _0x52ba92 = 0x0, _0x117384 = ''; _0x38e4f2 = _0x37585d['\x63\x68\x61\x72\x41\x74'](_0x52ba92++); ~_0x38e4f2 && (_0xbfb0a6 = _0x4b8a0e % 0x4 ? _0xbfb0a6 * 0x40 + _0x38e4f2 : _0x38e4f2, _0x4b8a0e++ % 0x4) ? _0x117384 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0xbfb0a6 >> (-0x2 * _0x4b8a0e & 0x6)) : 0x0) {
                    _0x38e4f2 = _0x237ebc['\x69\x6e\x64\x65\x78\x4f\x66'](_0x38e4f2);
                }
                return _0x117384;
            });
        }());
        _0x2ff0['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x33d74f) {
            var _0x569b3b = atob(_0x33d74f);
            var _0x615aee = [];
            for (var _0x475448 = 0x0, _0x3b5a87 = _0x569b3b['\x6c\x65\x6e\x67\x74\x68']; _0x475448 < _0x3b5a87; _0x475448++) {
                _0x615aee += '\x25' + ('\x30\x30' + _0x569b3b['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x475448)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x615aee);
        };
        _0x2ff0['\x64\x61\x74\x61'] = {};
        _0x2ff0['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x2ff0['\x64\x61\x74\x61'][_0x464831] === undefined) {
        _0x591e3f = _0x2ff0['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x591e3f);
        _0x2ff0['\x64\x61\x74\x61'][_0x464831] = _0x591e3f;
    } else {
        _0x591e3f = _0x2ff0['\x64\x61\x74\x61'][_0x464831];
    }
    return _0x591e3f;
};
var vc1;
function TipMes(_0x25673e, _0x479a50) {
    var _0x483528 = {
        '\x71\x42\x59': function _0x2c5b42(_0x26db92, _0x46c5af) {
            return _0x26db92(_0x46c5af);
        }
    };
    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x367513 = {
                '\x7a\x54\x69': function _0x49af74(_0x36e1ef, _0x426893, _0x3013bc, _0x2e38e4, _0x379345) {
                    return _0x36e1ef(_0x426893, _0x3013bc, _0x2e38e4, _0x379345);
                },
                '\x45\x4c\x76': function _0x380581(_0x37b0db, _0x1f74c9) {
                    return _0x37b0db != _0x1f74c9;
                },
                '\x43\x48\x7a': function _0x409a41(_0x2e20bc, _0x4287d3, _0x51d64c, _0x7847b0, _0x30526e, _0x142e34, _0x1e4a6f, _0x4cb772, _0x4b2da4, _0x51c589) {
                    return _0x2e20bc(_0x4287d3, _0x51d64c, _0x7847b0, _0x30526e, _0x142e34, _0x1e4a6f, _0x4cb772, _0x4b2da4, _0x51c589);
                },
                '\x6b\x6a\x7a': function _0x388c92(_0x401985, _0x15294d) {
                    return _0x401985 * _0x15294d;
                },
                '\x58\x63\x50': function _0x1ffaaa(_0x3dad04) {
                    return _0x3dad04();
                },
                '\x55\x7a\x72': function _0xf2663(_0x51f1eb, _0x2c0c75) {
                    return _0x51f1eb * _0x2c0c75;
                },
                '\x70\x6d\x63': function _0x221ff6(_0x6db980) {
                    return _0x6db980();
                },
                '\x45\x45\x52': function _0x1b9e89(_0x2903f9, _0x5d6ffb, _0x9dd60, _0x15aa10, _0x5edf4f, _0x12984c, _0x36d9ca, _0xbb18e5, _0x42531c, _0x716af8, _0x6afa35, _0x1413c5) {
                    return _0x2903f9(_0x5d6ffb, _0x9dd60, _0x15aa10, _0x5edf4f, _0x12984c, _0x36d9ca, _0xbb18e5, _0x42531c, _0x716af8, _0x6afa35, _0x1413c5);
                },
                '\x55\x63\x71': function _0x4e2194(_0x29d63a, _0x16bac0) {
                    return _0x29d63a * _0x16bac0;
                },
                '\x79\x7a\x6d': function _0x25a347(_0x21c35c) {
                    return _0x21c35c();
                },
                '\x66\x68\x78': function _0x25cfa3(_0x16e1c2, _0x394e56) {
                    return _0x16e1c2 * _0x394e56;
                },
                '\x6b\x50\x6e': function _0x1eddad(_0x476f82, _0x26d46f, _0x1f0b7b, _0x4d30b7, _0x458d9f, _0x25c96b, _0x54ab29, _0x5b4346, _0x46ff07, _0x432cab) {
                    return _0x476f82(_0x26d46f, _0x1f0b7b, _0x4d30b7, _0x458d9f, _0x25c96b, _0x54ab29, _0x5b4346, _0x46ff07, _0x432cab);
                },
                '\x54\x54\x57': function _0x2658cb(_0x28c566, _0x39c72c) {
                    return _0x28c566 * _0x39c72c;
                },
                '\x71\x53\x43': function _0x181f5c(_0x405d2a) {
                    return _0x405d2a();
                },
                '\x73\x49\x58': function _0x59aab1(_0x2e1d9c, _0x2778ef) {
                    return _0x2e1d9c - _0x2778ef;
                },
                '\x48\x4e\x43': function _0x5e0b16(_0x49521d, _0x2f3eb3) {
                    return _0x49521d * _0x2f3eb3;
                },
                '\x6d\x72\x64': function _0x3dd188(_0x105788, _0x3a6dae) {
                    return _0x105788 * _0x3a6dae;
                },
                '\x54\x63\x6c': function _0x2295f2(_0x3688e1) {
                    return _0x3688e1();
                },
                '\x47\x67\x44': function _0x3c54f1(_0x11ed4a) {
                    return _0x11ed4a();
                },
                '\x42\x55\x64': function _0x1dd6c9(_0x320ab5, _0x59aba8) {
                    return _0x320ab5 - _0x59aba8;
                },
                '\x6c\x71\x51': function _0x5ac3c5(_0xe60c48, _0x520ee6) {
                    return _0xe60c48 * _0x520ee6;
                },
                '\x62\x77\x52': function _0x378ca3(_0x44259b) {
                    return _0x44259b();
                },
                '\x66\x53\x79': function _0x4ab90e(_0x470688, _0x312627) {
                    return _0x470688 * _0x312627;
                },
                '\x4f\x64\x52': function _0x348f0e(_0x54083a, _0x57fb8a) {
                    return _0x54083a * _0x57fb8a;
                },
                '\x49\x4f\x49': function _0x340440(_0x1b6107, _0x4f769d) {
                    return _0x1b6107 - _0x4f769d;
                },
                '\x6d\x4a\x55': function _0x115b51(_0x85b294, _0x1ad981) {
                    return _0x85b294 * _0x1ad981;
                },
                '\x63\x47\x50': function _0x342763(_0x520c11, _0x213fb2) {
                    return _0x520c11 * _0x213fb2;
                },
                '\x76\x57\x64': function _0x21bdb7(_0x3ff97c) {
                    return _0x3ff97c();
                },
                '\x63\x66\x6a': function _0x1fb253(_0x561307, _0x1477fd) {
                    return _0x561307 * _0x1477fd;
                },
                '\x74\x70\x56': function _0x1c2978(_0x4ed2cb, _0x4e0a55, _0x1347f6, _0xad2b98, _0x36ff88) {
                    return _0x4ed2cb(_0x4e0a55, _0x1347f6, _0xad2b98, _0x36ff88);
                },
                '\x52\x70\x58': function _0x1fba30(_0x4d7129, _0x5baafe) {
                    return _0x4d7129 + _0x5baafe;
                },
                '\x63\x53\x47': function _0x13932f(_0x33e96d) {
                    return _0x33e96d();
                },
                '\x54\x76\x41': function _0x3f57a2(_0x1a2b70) {
                    return _0x1a2b70();
                },
                '\x73\x5a\x69': function _0x44b3ee(_0x33b33b) {
                    return _0x33b33b();
                },
                '\x42\x6a\x58': function _0x131482(_0x3a0081, _0x20c731) {
                    return _0x3a0081(_0x20c731);
                },
                '\x43\x75\x73': function _0x19596e(_0x54c293, _0x424a69, _0x50df00, _0x1765bf, _0x38fe3f) {
                    return _0x54c293(_0x424a69, _0x50df00, _0x1765bf, _0x38fe3f);
                },
                '\x6e\x6d\x79': function _0x4e6c44(_0x4c8886, _0x12c1f5) {
                    return _0x4c8886 != _0x12c1f5;
                },
                '\x64\x51\x42': function _0x4fa7f7(_0x466f1a, _0x14fad2, _0x4fcc69, _0x45aea7, _0x25baf8) {
                    return _0x466f1a(_0x14fad2, _0x4fcc69, _0x45aea7, _0x25baf8);
                },
                '\x4b\x6e\x6b': function _0x3c1304(_0xdc7983, _0x202af1) {
                    return _0xdc7983(_0x202af1);
                }
            };
            var _0xab0b36 = _0x2ff0('0x3')[_0x2ff0('0x4')]('\x7c'), _0x170681 = 0x0;
            while (!![]) {
                switch (_0xab0b36[_0x170681++]) {
                case '0':
                    ;
                    continue;
                case '1':
                    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                        '\x72\x75\x6e': function () {
                            try {
                                new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        if (_0x1ad39a[_0x2ff0('0x7')](vc1, null)) {
                                            _0x1ad39a[_0x2ff0('0x8')](UIPlumb, v1, 0x0, -0x64, 0x12c);
                                            _0x1ad39a[_0x2ff0('0x9')](UIFadein, v2, 0x64, 0x0, 0x12c);
                                        }
                                        ;
                                    }
                                }), 0xdac);
                            } catch (_0x65cc6e) {
                                _0x483528[_0x2ff0('0xa')](print, _0x65cc6e);
                            }
                        }
                    }));
                    continue;
                case '2':
                    _0x367513[_0x2ff0('0xb')](UIFadein, v2, 0x0, 0x64, 0x12c);
                    continue;
                case '3':
                    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                        '\x72\x75\x6e': function () {
                            try {
                                new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        if (_0x1ad39a[_0x2ff0('0x7')](vc1, null)) {
                                            vc1[_0x2ff0('0xc')]();
                                            vc1 = null;
                                        }
                                        ;
                                    }
                                }), 0xed8);
                            } catch (_0x3abff7) {
                                _0x1ad39a[_0x2ff0('0xd')](print, _0x3abff7);
                            }
                        }
                    }));
                    continue;
                case '4':
                    if (_0x367513[_0x2ff0('0xe')](vc1, null)) {
                        vc1[_0x2ff0('0xc')]();
                        vc1 = null;
                    }
                    continue;
                case '5':
                    try {
                        var _0x4677e7 = _0x2ff0('0xf')[_0x2ff0('0x4')]('\x7c'), _0x24de11 = 0x0;
                        while (!![]) {
                            switch (_0x4677e7[_0x24de11++]) {
                            case '0':
                                v7 = _0x367513[_0x2ff0('0x10')](NewView, 'LL', _0x367513[_0x2ff0('0x11')](_0x367513[_0x2ff0('0x12')](W), 0.39), _0x367513[_0x2ff0('0x13')](_0x367513[_0x2ff0('0x14')](W), 0.01), 'CC', 0x1, 0x1, [
                                    'TB',
                                    _0x2ff0('0x15'),
                                    _0x2ff0('0x16')
                                ], [
                                    0x14,
                                    0xa,
                                    0x0,
                                    0x0
                                ], null);
                                continue;
                            case '1':
                                v1[_0x2ff0('0x17')](v7);
                                continue;
                            case '2':
                                v2[_0x2ff0('0x17')](v3);
                                continue;
                            case '3':
                                v1[_0x2ff0('0x17')](v2);
                                continue;
                            case '4':
                                v2[_0x2ff0('0x17')](v6);
                                continue;
                            case '5':
                                vc1 = _0x367513[_0x2ff0('0x18')](NewCDV, 0x2, null, 0x0, v1, _0x367513[_0x2ff0('0x19')](_0x367513[_0x2ff0('0x1a')](W), 0.4), _0x367513[_0x2ff0('0x1b')](_0x367513[_0x2ff0('0x1a')](H), 0.1), ![], ![], 'CT', 0x0, _0x367513[_0x2ff0('0x1b')](_0x367513[_0x2ff0('0x1a')](W), 0.008));
                                continue;
                            case '6':
                                v4[_0x2ff0('0x17')](vt1);
                                continue;
                            case '7':
                                v3 = _0x367513[_0x2ff0('0x1c')](NewView, 'LL', _0x367513[_0x2ff0('0x1d')](_0x367513[_0x2ff0('0x1e')](W), 0.39), _0x367513[_0x2ff0('0x1f')](_0x367513[_0x2ff0('0x20')](_0x367513[_0x2ff0('0x1e')](H), 0.1), _0x367513[_0x2ff0('0x20')](_0x367513[_0x2ff0('0x1e')](W), 0.01)), 'CC', 0x0, 0x1, [
                                    null,
                                    _0x2ff0('0x21')
                                ], 0x14, null);
                                continue;
                            case '8':
                                v4 = _0x367513[_0x2ff0('0x1c')](NewView, 'LL', _0x367513[_0x2ff0('0x1f')](_0x367513[_0x2ff0('0x22')](_0x367513[_0x2ff0('0x23')](W), 0.39), _0x367513[_0x2ff0('0x22')](_0x367513[_0x2ff0('0x24')](H), 0.1)), _0x367513[_0x2ff0('0x25')](_0x367513[_0x2ff0('0x26')](_0x367513[_0x2ff0('0x27')](H), 0.1), _0x367513[_0x2ff0('0x28')](_0x367513[_0x2ff0('0x27')](W), 0.01)), 'LC', 0x0, 0x2, null, null, null);
                                continue;
                            case '9':
                                v6 = _0x367513[_0x2ff0('0x1c')](NewView, 'LL', _0x367513[_0x2ff0('0x29')](_0x367513[_0x2ff0('0x27')](W), 0.01), _0x367513[_0x2ff0('0x2a')](_0x367513[_0x2ff0('0x2b')](_0x367513[_0x2ff0('0x27')](H), 0.1), _0x367513[_0x2ff0('0x2c')](_0x367513[_0x2ff0('0x2d')](W), 0.01)), 'CC', 0x1, 0x1, [
                                    'LR',
                                    _0x2ff0('0x15'),
                                    _0x2ff0('0x16')
                                ], [
                                    0x14,
                                    0x0,
                                    0x0,
                                    0xa
                                ], null);
                                continue;
                            case '10':
                                v1 = _0x367513[_0x2ff0('0x1c')](NewView, 'LL', _0x367513[_0x2ff0('0x2c')](_0x367513[_0x2ff0('0x2d')](W), 0.4), _0x367513[_0x2ff0('0x2e')](_0x367513[_0x2ff0('0x2d')](H), 0.1), 'LT', 0x1, 0x2, null, 0x0, null);
                                continue;
                            case '11':
                                v3[_0x2ff0('0x17')](v4);
                                continue;
                            case '12':
                                vt1 = _0x367513[_0x2ff0('0x2f')](NewText, _0x367513[_0x2ff0('0x30')](_0x2ff0('0x31'), _0x25673e), 'CC', 0xc, _0x2ff0('0x32'));
                                continue;
                            case '13':
                                v2 = _0x367513[_0x2ff0('0x1c')](NewView, 'LL', _0x367513[_0x2ff0('0x2e')](_0x367513[_0x2ff0('0x33')](W), 0.4), _0x367513[_0x2ff0('0x2a')](_0x367513[_0x2ff0('0x2e')](_0x367513[_0x2ff0('0x34')](H), 0.1), _0x367513[_0x2ff0('0x2e')](_0x367513[_0x2ff0('0x35')](W), 0.01)), 'CC', 0x0, 0x2, null, null, null);
                                continue;
                            }
                            break;
                        }
                    } catch (_0x38f086) {
                        _0x367513[_0x2ff0('0x36')](print, _0x38f086);
                    }
                    continue;
                case '6':
                    _0x367513[_0x2ff0('0x37')](UIPlumb, v1, -0x64, 0x0, 0x12c);
                    continue;
                case '7':
                    ;
                    continue;
                case '8':
                    var _0x1ad39a = {
                        '\x74\x6b\x57': function _0x1cc2f4(_0xf0a08c, _0x51a356) {
                            return _0x367513[_0x2ff0('0x38')](_0xf0a08c, _0x51a356);
                        },
                        '\x62\x4e\x59': function _0x55bf9a(_0x3d11da, _0xd449, _0x3b9987, _0x36dde3, _0x30c8b8) {
                            return _0x367513[_0x2ff0('0x37')](_0x3d11da, _0xd449, _0x3b9987, _0x36dde3, _0x30c8b8);
                        },
                        '\x6c\x6b\x77': function _0x1bbd22(_0x31fd2a, _0x4835b7, _0xb6fe5b, _0x212664, _0x47a420) {
                            return _0x367513[_0x2ff0('0x39')](_0x31fd2a, _0x4835b7, _0xb6fe5b, _0x212664, _0x47a420);
                        },
                        '\x4e\x74\x64': function _0x221391(_0x4a75ec, _0x9ad66f) {
                            return _0x367513[_0x2ff0('0x3a')](_0x4a75ec, _0x9ad66f);
                        }
                    };
                    continue;
                }
                break;
            }
        }
    }));
}
;
var kc1;
function Connect(_0x47ba2f) {
    var _0x2665dd = {
        '\x61\x6e\x59': function _0xf9eec(_0x1a11a4, _0x2b62ae) {
            return _0x1a11a4 != _0x2b62ae;
        },
        '\x4b\x4e\x48': function _0x3634ba(_0x16005d, _0x2688c5, _0x345b0e, _0x324079, _0x571da2) {
            return _0x16005d(_0x2688c5, _0x345b0e, _0x324079, _0x571da2);
        },
        '\x7a\x5a\x5a': function _0x5cf7ee(_0xe3034e, _0x46f51d, _0x22a837, _0x758d71, _0x2c592c) {
            return _0xe3034e(_0x46f51d, _0x22a837, _0x758d71, _0x2c592c);
        }
    };
    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x141307 = {
                '\x43\x51\x48': function _0x3c8dec(_0x36a92f, _0x395ed1) {
                    return _0x36a92f != _0x395ed1;
                },
                '\x51\x78\x77': function _0xa1a468(_0x36a2f4, _0x278c3e, _0x2f81bc, _0xf1ba7c, _0x4d5c31, _0x4565ae, _0xeff0d6, _0x3d3d68, _0x140a7d, _0x1f4ed2) {
                    return _0x36a2f4(_0x278c3e, _0x2f81bc, _0xf1ba7c, _0x4d5c31, _0x4565ae, _0xeff0d6, _0x3d3d68, _0x140a7d, _0x1f4ed2);
                },
                '\x6c\x6a\x52': function _0x520b96(_0x4777ef, _0x352556) {
                    return _0x4777ef - _0x352556;
                },
                '\x5a\x77\x4d': function _0x56e147(_0x3ec7ae, _0x4f6764) {
                    return _0x3ec7ae * _0x4f6764;
                },
                '\x56\x6e\x65': function _0x4de894(_0x162f2c) {
                    return _0x162f2c();
                },
                '\x72\x45\x4a': function _0x3e2eb6(_0x41232a) {
                    return _0x41232a();
                },
                '\x55\x52\x54': function _0x44d6bb(_0x50e4f5, _0x3f73fe) {
                    return _0x50e4f5 * _0x3f73fe;
                },
                '\x4f\x4c\x78': function _0x4bcb9d(_0x1dcdb4) {
                    return _0x1dcdb4();
                },
                '\x46\x43\x76': function _0x499249(_0x1570c1, _0x458966, _0x366c30, _0x54f52b, _0x1ceda7, _0x21f790, _0x1b35cc, _0x271ca7, _0xe92b73, _0x402ca5, _0x39c27d, _0x4cbf69) {
                    return _0x1570c1(_0x458966, _0x366c30, _0x54f52b, _0x1ceda7, _0x21f790, _0x1b35cc, _0x271ca7, _0xe92b73, _0x402ca5, _0x39c27d, _0x4cbf69);
                },
                '\x66\x64\x66': function _0x30c8a9(_0x26e002) {
                    return _0x26e002();
                },
                '\x4b\x54\x74': function _0x498d49(_0x34635b) {
                    return _0x34635b();
                },
                '\x5a\x4a\x62': function _0x146ff6(_0x3c56e7, _0x513ed7, _0x4ce6f8, _0x4cb3e6, _0x270ecd, _0x4cea86, _0x3f867d, _0x308f6a, _0x1ebaf2, _0x2918f5) {
                    return _0x3c56e7(_0x513ed7, _0x4ce6f8, _0x4cb3e6, _0x270ecd, _0x4cea86, _0x3f867d, _0x308f6a, _0x1ebaf2, _0x2918f5);
                },
                '\x75\x56\x45': function _0x11e2c8(_0x11d79a) {
                    return _0x11d79a();
                },
                '\x6b\x50\x48': function _0x25959c(_0x491370, _0x4e651b, _0x40a3eb, _0x5543fd, _0x904d86, _0x517c85, _0x1cfbc9, _0x25e96d, _0x179de8, _0x945c6d) {
                    return _0x491370(_0x4e651b, _0x40a3eb, _0x5543fd, _0x904d86, _0x517c85, _0x1cfbc9, _0x25e96d, _0x179de8, _0x945c6d);
                },
                '\x47\x79\x50': function _0x167d6e(_0x193631, _0x4a360f) {
                    return _0x193631 * _0x4a360f;
                },
                '\x6f\x75\x44': function _0x127852(_0x36f961) {
                    return _0x36f961();
                },
                '\x6a\x78\x50': function _0x5ee42c(_0x58b6e1, _0x3181c5) {
                    return _0x58b6e1 * _0x3181c5;
                },
                '\x4c\x75\x5a': function _0x6b0e01(_0x41d09c) {
                    return _0x41d09c();
                },
                '\x65\x45\x55': function _0x33894e(_0x436e9c) {
                    return _0x436e9c();
                },
                '\x45\x43\x7a': function _0x565528(_0x3507cf, _0x30aae9) {
                    return _0x3507cf * _0x30aae9;
                },
                '\x4a\x61\x48': function _0x154d7d(_0x1ded48) {
                    return _0x1ded48();
                },
                '\x55\x50\x4a': function _0x20f352(_0x249f62, _0x39ee5d) {
                    return _0x249f62 * _0x39ee5d;
                },
                '\x7a\x58\x6f': function _0x5c8b38(_0x1d1bdb, _0x3bc472, _0xd790f8, _0x40a41b, _0x51bd43, _0x1dd728, _0x2610d7, _0x225372, _0x1422b8, _0x5c5613) {
                    return _0x1d1bdb(_0x3bc472, _0xd790f8, _0x40a41b, _0x51bd43, _0x1dd728, _0x2610d7, _0x225372, _0x1422b8, _0x5c5613);
                },
                '\x4f\x79\x66': function _0x27fba5(_0x35a088, _0x3233ee) {
                    return _0x35a088 * _0x3233ee;
                },
                '\x77\x4e\x66': function _0x439a3f(_0x25ec23) {
                    return _0x25ec23();
                },
                '\x5a\x6b\x6d': function _0x5f07b5(_0x2bcafe) {
                    return _0x2bcafe();
                },
                '\x43\x4c\x69': function _0x29d0a8(_0x34f497, _0x393bbb) {
                    return _0x34f497 * _0x393bbb;
                },
                '\x55\x57\x70': function _0x24e9a8(_0x2d93c2) {
                    return _0x2d93c2();
                },
                '\x76\x6f\x4b': function _0x2ac557(_0x414c4a, _0xfe294e, _0x3fe3d5, _0xad21f1, _0x52894b) {
                    return _0x414c4a(_0xfe294e, _0x3fe3d5, _0xad21f1, _0x52894b);
                },
                '\x47\x63\x78': function _0x5d1c8c(_0x219d54, _0x2aa483) {
                    return _0x219d54(_0x2aa483);
                },
                '\x48\x6e\x70': function _0x1d8ea7(_0x3dc24c, _0x100093, _0x31677c, _0x48c075, _0x41bb10) {
                    return _0x3dc24c(_0x100093, _0x31677c, _0x48c075, _0x41bb10);
                },
                '\x6d\x79\x41': function _0xdecddd(_0xaff5a1, _0x47515e) {
                    return _0xaff5a1 != _0x47515e;
                },
                '\x76\x50\x75': function _0x4b00dd(_0x2b35fb, _0x4fb8a0, _0x5f0c26, _0x1db02e, _0x562c32) {
                    return _0x2b35fb(_0x4fb8a0, _0x5f0c26, _0x1db02e, _0x562c32);
                }
            };
            var _0x302fb2 = _0x2ff0('0x3b')[_0x2ff0('0x4')]('\x7c'), _0x1b5de3 = 0x0;
            while (!![]) {
                switch (_0x302fb2[_0x1b5de3++]) {
                case '0':
                    if (_0x141307[_0x2ff0('0x3c')](kc1, null)) {
                        kc1[_0x2ff0('0xc')]();
                    }
                    continue;
                case '1':
                    try {
                        var _0x18092f = _0x2ff0('0x3d')[_0x2ff0('0x4')]('\x7c'), _0x5ca08f = 0x0;
                        while (!![]) {
                            switch (_0x18092f[_0x5ca08f++]) {
                            case '0':
                                k4 = _0x141307[_0x2ff0('0x3e')](NewView, 'LL', _0x141307[_0x2ff0('0x3f')](_0x141307[_0x2ff0('0x40')](_0x141307[_0x2ff0('0x41')](W), 0.5), _0x141307[_0x2ff0('0x40')](_0x141307[_0x2ff0('0x42')](H), 0.01)), _0x141307[_0x2ff0('0x43')](_0x141307[_0x2ff0('0x44')](H), 0.01), 'CC', 0x1, 0x1, [
                                    'TB',
                                    _0x2ff0('0x15'),
                                    _0x2ff0('0x16')
                                ], [
                                    0x14,
                                    0xa,
                                    0x0,
                                    0x0
                                ], null);
                                continue;
                            case '1':
                                kc1 = _0x141307[_0x2ff0('0x45')](NewCDV, 0x2, null, 0x0, k1, _0x141307[_0x2ff0('0x43')](_0x141307[_0x2ff0('0x46')](W), 0.5), _0x141307[_0x2ff0('0x43')](_0x141307[_0x2ff0('0x47')](H), 0.65), ![], ![], 'CB', 0x0, 0x0);
                                continue;
                            case '2':
                                k1 = _0x141307[_0x2ff0('0x48')](NewView, 'LL', _0x141307[_0x2ff0('0x43')](_0x141307[_0x2ff0('0x49')](W), 0.5), _0x141307[_0x2ff0('0x43')](_0x141307[_0x2ff0('0x49')](H), 0.7), 'LT', 0x1, 0x2, null, 0x0, null);
                                continue;
                            case '3':
                                k2 = _0x141307[_0x2ff0('0x4a')](NewView, 'LL', _0x141307[_0x2ff0('0x3f')](_0x141307[_0x2ff0('0x4b')](_0x141307[_0x2ff0('0x4c')](W), 0.5), _0x141307[_0x2ff0('0x4d')](_0x141307[_0x2ff0('0x4e')](H), 0.01)), _0x141307[_0x2ff0('0x4d')](_0x141307[_0x2ff0('0x4f')](H), 0.14), 'CC', 0x1, 0x1, [
                                    'RB',
                                    _0x2ff0('0x50'),
                                    _0x2ff0('0x51')
                                ], 0x14, null);
                                continue;
                            case '4':
                                k1$[_0x2ff0('0x17')](k2$);
                                continue;
                            case '5':
                                k1$ = _0x141307[_0x2ff0('0x4a')](NewView, 'LL', _0x141307[_0x2ff0('0x52')](_0x141307[_0x2ff0('0x53')](W), 0.5), _0x141307[_0x2ff0('0x54')](_0x141307[_0x2ff0('0x53')](H), 0.14), 'LT', 0x0, 0x2, null, 0x0, null);
                                continue;
                            case '6':
                                k1[_0x2ff0('0x17')](k1$);
                                continue;
                            case '7':
                                k2$ = _0x141307[_0x2ff0('0x55')](NewView, 'LL', _0x141307[_0x2ff0('0x56')](_0x141307[_0x2ff0('0x57')](H), 0.01), _0x141307[_0x2ff0('0x56')](_0x141307[_0x2ff0('0x58')](H), 0.14), 'CC', 0x1, 0x1, [
                                    'LR',
                                    _0x2ff0('0x15'),
                                    _0x2ff0('0x16')
                                ], [
                                    0x14,
                                    0x0,
                                    0x0,
                                    0xa
                                ], null);
                                continue;
                            case '8':
                                k1[_0x2ff0('0x17')](k4);
                                continue;
                            case '9':
                                k1$[_0x2ff0('0x17')](k2);
                                continue;
                            case '10':
                                k3 = _0x141307[_0x2ff0('0x55')](NewView, 'LL', _0x141307[_0x2ff0('0x3f')](_0x141307[_0x2ff0('0x59')](_0x141307[_0x2ff0('0x58')](W), 0.5), _0x141307[_0x2ff0('0x59')](_0x141307[_0x2ff0('0x5a')](H), 0.02)), _0x141307[_0x2ff0('0x3f')](_0x141307[_0x2ff0('0x59')](_0x141307[_0x2ff0('0x5a')](H), 0.15), _0x141307[_0x2ff0('0x59')](_0x141307[_0x2ff0('0x5a')](H), 0.02)), 'CC', 0x1, 0x1, [
                                    'RB',
                                    _0x2ff0('0x5b')
                                ], 0x14, null);
                                continue;
                            case '11':
                                k3[_0x2ff0('0x17')](kt1);
                                continue;
                            case '12':
                                k2[_0x2ff0('0x17')](k3);
                                continue;
                            case '13':
                                kt1 = _0x141307[_0x2ff0('0x5c')](NewText, _0x47ba2f, 'CC', null, _0x2ff0('0x32'));
                                continue;
                            }
                            break;
                        }
                    } catch (_0x2d72) {
                        _0x141307[_0x2ff0('0x5d')](print, _0x2d72);
                    }
                    continue;
                case '2':
                    ;
                    continue;
                case '3':
                    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                        '\x72\x75\x6e': function () {
                            var _0x517dfe = {
                                '\x76\x61\x54': function _0xf44c0f(_0x216a32, _0x33b5ea) {
                                    return _0x2665dd[_0x2ff0('0x5e')](_0x216a32, _0x33b5ea);
                                },
                                '\x59\x53\x4f': function _0x1ae3e0(_0x2aeac2, _0x31896a, _0x25aeb9, _0x367fec, _0x1a06af) {
                                    return _0x2665dd[_0x2ff0('0x5f')](_0x2aeac2, _0x31896a, _0x25aeb9, _0x367fec, _0x1a06af);
                                },
                                '\x73\x75\x54': function _0x48a0b2(_0x4c54f3, _0x159b44, _0x1173fb, _0x14a97e, _0x2b436f) {
                                    return _0x2665dd[_0x2ff0('0x60')](_0x4c54f3, _0x159b44, _0x1173fb, _0x14a97e, _0x2b436f);
                                }
                            };
                            new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                '\x72\x75\x6e': function () {
                                    if (_0x517dfe[_0x2ff0('0x61')](kc1, null)) {
                                        _0x517dfe[_0x2ff0('0x62')](UIPlumb, k1, 0x0, 0x28, 0x96);
                                        _0x517dfe[_0x2ff0('0x63')](UIFadein, k1$, 0x64, 0x0, 0x96);
                                    }
                                    ;
                                }
                            }), 0x1388);
                        }
                    }));
                    continue;
                case '4':
                    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                        '\x72\x75\x6e': function () {
                            new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                '\x72\x75\x6e': function () {
                                    if (_0x514d32[_0x2ff0('0x64')](kc1, null)) {
                                        kc1[_0x2ff0('0xc')]();
                                    }
                                    ;
                                }
                            }), 0x141e);
                        }
                    }));
                    continue;
                case '5':
                    _0x141307[_0x2ff0('0x65')](UIFadein, k1$, 0x0, 0x64, 0x96);
                    continue;
                case '6':
                    ;
                    continue;
                case '7':
                    var _0x514d32 = {
                        '\x75\x7a\x71': function _0x374c16(_0x44a236, _0x15837f) {
                            return _0x141307[_0x2ff0('0x66')](_0x44a236, _0x15837f);
                        }
                    };
                    continue;
                case '8':
                    _0x141307[_0x2ff0('0x67')](UIPlumb, k1, 0x28, 0x0, 0x96);
                    continue;
                }
                break;
            }
        }
    }));
}
;
var jst1 = [
    _0x2ff0('0x68'),
    _0x2ff0('0x69'),
    '',
    _0x2ff0('0x6a'),
    _0x2ff0('0x6b'),
    _0x2ff0('0x6c'),
    '',
    _0x2ff0('0x6d'),
    _0x2ff0('0x6e'),
    '',
    _0x2ff0('0x6f'),
    _0x2ff0('0x70'),
    _0x2ff0('0x71'),
    _0x2ff0('0x72'),
    '',
    _0x2ff0('0x73'),
    '',
    _0x2ff0('0x74'),
    _0x2ff0('0x75'),
    '',
    _0x2ff0('0x76'),
    '',
    _0x2ff0('0x77'),
    _0x2ff0('0x78'),
    _0x2ff0('0x79'),
    _0x2ff0('0x7a'),
    '',
    _0x2ff0('0x7b'),
    _0x2ff0('0x7c'),
    _0x2ff0('0x7d'),
    _0x2ff0('0x7e'),
    '',
    _0x2ff0('0x7f'),
    _0x2ff0('0x80'),
    _0x2ff0('0x81'),
    '',
    _0x2ff0('0x82'),
    _0x2ff0('0x83'),
    _0x2ff0('0x84'),
    '',
    _0x2ff0('0x85'),
    _0x2ff0('0x86'),
    '',
    _0x2ff0('0x87'),
    _0x2ff0('0x88'),
    _0x2ff0('0x89'),
    '',
    _0x2ff0('0x8a'),
    _0x2ff0('0x8b'),
    '',
    _0x2ff0('0x8c'),
    _0x2ff0('0x8d'),
    _0x2ff0('0x8e'),
    '',
    _0x2ff0('0x71'),
    _0x2ff0('0x8f'),
    _0x2ff0('0x90'),
    _0x2ff0('0x91'),
    _0x2ff0('0x92'),
    _0x2ff0('0x93'),
    _0x2ff0('0x94'),
    _0x2ff0('0x95'),
    _0x2ff0('0x96'),
    '',
    _0x2ff0('0x97'),
    _0x2ff0('0x98'),
    _0x2ff0('0x96'),
    '',
    _0x2ff0('0x99'),
    _0x2ff0('0x9a'),
    _0x2ff0('0x96'),
    '',
    '',
    '',
    _0x2ff0('0x9b'),
    _0x2ff0('0x9c')
];
var jst2 = [''];
for (a = 0x0; a < jst1[_0x2ff0('0x9d')]; a++) {
    jst2 = jst2 + jst1[a] + '\x0a';
}
;
var nc1;
function jslog(_0x2ced80) {
    var _0x25c054 = {
        '\x77\x68\x55': function _0x3b0a21(_0x9b57e9, _0x143077, _0x49e52a, _0x2a4979, _0x73d8c5, _0x583a3f, _0x341085, _0x4e54c3, _0x86864a, _0x513043) {
            return _0x9b57e9(_0x143077, _0x49e52a, _0x2a4979, _0x73d8c5, _0x583a3f, _0x341085, _0x4e54c3, _0x86864a, _0x513043);
        },
        '\x72\x6d\x45': function _0x55a5d4(_0x3d8de6, _0x1a5e5c) {
            return _0x3d8de6 * _0x1a5e5c;
        },
        '\x63\x66\x4c': function _0x322b6b(_0xe4c32d) {
            return _0xe4c32d();
        },
        '\x4e\x6b\x51': function _0x5b237a(_0x174c05, _0x345818) {
            return _0x174c05(_0x345818);
        },
        '\x79\x4d\x59': function _0x5a5902(_0x25e0ce, _0x2df143, _0x296a04, _0x3ecd3a, _0x4917f3, _0xa8ea76, _0x4b646a, _0xf550c7, _0xf53367, _0x2f1679, _0x2d2872, _0x337659) {
            return _0x25e0ce(_0x2df143, _0x296a04, _0x3ecd3a, _0x4917f3, _0xa8ea76, _0x4b646a, _0xf550c7, _0xf53367, _0x2f1679, _0x2d2872, _0x337659);
        },
        '\x49\x72\x64': function _0x2b05ad(_0x4bd3cd) {
            return _0x4bd3cd();
        },
        '\x62\x63\x4d': function _0x2dacbc(_0x121c2d, _0x3b2c56, _0x251d40, _0x177a0a, _0x11d148) {
            return _0x121c2d(_0x3b2c56, _0x251d40, _0x177a0a, _0x11d148);
        },
        '\x61\x71\x56': function _0x9e41d2(_0x13f86c, _0x3f1909) {
            return _0x13f86c(_0x3f1909);
        },
        '\x6b\x42\x50': function _0x3d2c2d(_0x5b279f, _0x4db99f) {
            return _0x5b279f == _0x4db99f;
        },
        '\x79\x65\x4b': function _0x4d9fe9(_0x57deea) {
            return _0x57deea();
        },
        '\x46\x6f\x4a': function _0x28a3af(_0x2132fd, _0x4d89ae) {
            return _0x2132fd(_0x4d89ae);
        },
        '\x77\x56\x47': function _0x67e9f1(_0xa5c959, _0x41a4fe) {
            return _0xa5c959 != _0x41a4fe;
        },
        '\x4e\x72\x43': function _0x8e2b44(_0x595165, _0x330da1) {
            return _0x595165 == _0x330da1;
        },
        '\x41\x51\x7a': function _0x11bb43(_0x4ef181, _0x25b0be) {
            return _0x4ef181 == _0x25b0be;
        },
        '\x42\x44\x78': function _0x23aff4(_0x4c052c, _0x387033) {
            return _0x4c052c(_0x387033);
        },
        '\x4a\x4e\x41': function _0x263d16(_0x35bcc2, _0x360a1d) {
            return _0x35bcc2 + _0x360a1d;
        },
        '\x57\x77\x41': function _0x1e8925(_0xf0cfd) {
            return _0xf0cfd();
        },
        '\x72\x53\x76': function _0x3ba3be(_0xbce680, _0x189e59, _0x717ba5, _0x3b8022, _0x53ed62, _0x3c3aa1, _0x232172, _0x28a1f2, _0x3e0079, _0x3bb0d9) {
            return _0xbce680(_0x189e59, _0x717ba5, _0x3b8022, _0x53ed62, _0x3c3aa1, _0x232172, _0x28a1f2, _0x3e0079, _0x3bb0d9);
        },
        '\x4d\x4e\x71': function _0x5933d5(_0x3f77bf, _0x3a97ed) {
            return _0x3f77bf * _0x3a97ed;
        },
        '\x72\x70\x67': function _0x1db25c(_0x177311, _0x1497a2) {
            return _0x177311 - _0x1497a2;
        },
        '\x56\x4c\x70': function _0x408ede(_0x34ff51, _0x5c00a5) {
            return _0x34ff51 * _0x5c00a5;
        },
        '\x78\x56\x4c': function _0x5cf6e5(_0x2ced7e, _0x1c415b) {
            return _0x2ced7e * _0x1c415b;
        },
        '\x48\x42\x64': function _0x4b6b92(_0x207836) {
            return _0x207836();
        },
        '\x56\x67\x75': function _0x42bb40(_0x328e3f, _0x28710b, _0x4adb35, _0x55ef21, _0x164316, _0x3f2b70, _0x50ff0b, _0x2c9be1, _0x3ca1d2, _0xfaa8aa, _0x10d92d, _0x2d0511) {
            return _0x328e3f(_0x28710b, _0x4adb35, _0x55ef21, _0x164316, _0x3f2b70, _0x50ff0b, _0x2c9be1, _0x3ca1d2, _0xfaa8aa, _0x10d92d, _0x2d0511);
        },
        '\x75\x57\x63': function _0x2deed8(_0x37a008, _0x315b60, _0x13eb1d, _0xd2e102, _0x30815a, _0x393a9d, _0x44a21f, _0x580e2a, _0xd55949, _0x449b25) {
            return _0x37a008(_0x315b60, _0x13eb1d, _0xd2e102, _0x30815a, _0x393a9d, _0x44a21f, _0x580e2a, _0xd55949, _0x449b25);
        },
        '\x4b\x61\x49': function _0x338f7c(_0x56c8b0) {
            return _0x56c8b0();
        },
        '\x6d\x6c\x6a': function _0x503532(_0x51fd5a, _0x3b4a44, _0x1c9410, _0x3a3421, _0xf32b5) {
            return _0x51fd5a(_0x3b4a44, _0x1c9410, _0x3a3421, _0xf32b5);
        },
        '\x70\x68\x50': function _0x35f56a(_0x3b5bb0, _0x553f06, _0xf78cc7, _0x243c80, _0x2ba48b) {
            return _0x3b5bb0(_0x553f06, _0xf78cc7, _0x243c80, _0x2ba48b);
        },
        '\x50\x76\x72': function _0x45e733(_0x3ccdb0, _0x323e3f) {
            return _0x3ccdb0 * _0x323e3f;
        },
        '\x6d\x6d\x64': function _0x87e108(_0x157dea, _0x4ecae8) {
            return _0x157dea - _0x4ecae8;
        },
        '\x54\x49\x7a': function _0x260d20(_0x2ecf09, _0x521c6a) {
            return _0x2ecf09 * _0x521c6a;
        },
        '\x56\x43\x6b': function _0x19704b(_0xc60c85) {
            return _0xc60c85();
        },
        '\x51\x78\x66': function _0xc12c47(_0x44872e) {
            return _0x44872e();
        },
        '\x5a\x58\x72': function _0x1423c9(_0x3f58a2, _0x7892aa) {
            return _0x3f58a2 * _0x7892aa;
        },
        '\x4c\x74\x4d': function _0x27aab2(_0x127c6a) {
            return _0x127c6a();
        },
        '\x42\x53\x44': function _0x201434(_0xe2033c, _0x4eca59, _0x1e7a86, _0x39cc2d, _0x24e9e2, _0x55b743, _0x3b3353, _0x52119e, _0x4ff8d7, _0x54b075) {
            return _0xe2033c(_0x4eca59, _0x1e7a86, _0x39cc2d, _0x24e9e2, _0x55b743, _0x3b3353, _0x52119e, _0x4ff8d7, _0x54b075);
        },
        '\x74\x59\x6e': function _0x5b2f9b(_0x5d9aff) {
            return _0x5d9aff();
        },
        '\x48\x61\x41': function _0x1f5556(_0x263e7d, _0x3e01a5) {
            return _0x263e7d * _0x3e01a5;
        },
        '\x4f\x70\x72': function _0x5fe61(_0x3a1265, _0x2c4982) {
            return _0x3a1265(_0x2c4982);
        },
        '\x73\x56\x58': function _0x47baef(_0x406f7c, _0x4ba4df, _0x128218, _0x7707b4, _0xfab8e4) {
            return _0x406f7c(_0x4ba4df, _0x128218, _0x7707b4, _0xfab8e4);
        }
    };
    ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x42b56d = {
                '\x74\x74\x77': function _0x2ac14c(_0x25b25d, _0x230e62) {
                    return _0x25c054[_0x2ff0('0x9e')](_0x25b25d, _0x230e62);
                },
                '\x77\x59\x78': function _0x5de809(_0x16dcfe, _0x224c0b) {
                    return _0x25c054[_0x2ff0('0x9f')](_0x16dcfe, _0x224c0b);
                },
                '\x50\x4c\x72': function _0xde18a1(_0xd0e229, _0x382099) {
                    return _0x25c054[_0x2ff0('0xa0')](_0xd0e229, _0x382099);
                },
                '\x6c\x59\x42': function _0x279c1e(_0x177372) {
                    return _0x25c054[_0x2ff0('0xa1')](_0x177372);
                },
                '\x6a\x57\x49': function _0x766e1(_0x4314d5, _0x1b3613) {
                    return _0x25c054[_0x2ff0('0x9f')](_0x4314d5, _0x1b3613);
                }
            };
            try {
                var _0x44e0f4 = _0x2ff0('0xa2')[_0x2ff0('0x4')]('\x7c'), _0x1dedf6 = 0x0;
                while (!![]) {
                    switch (_0x44e0f4[_0x1dedf6++]) {
                    case '0':
                        n5 = _0x25c054[_0x2ff0('0xa3')](NewView, 'LL', _0x25c054[_0x2ff0('0xa4')](_0x25c054[_0x2ff0('0xa1')](W), 0.619), _0x25c054[_0x2ff0('0xa5')](_0x25c054[_0x2ff0('0xa6')](_0x25c054[_0x2ff0('0xa1')](H), 0.1), _0x25c054[_0x2ff0('0xa7')](_0x25c054[_0x2ff0('0xa8')](W), 0.01)), 'CC', 0x1, 0x1, [
                            null,
                            _0x2ff0('0xa9')
                        ], 0xf, function (_0x5de261) {
                            var _0x2699bb = {
                                '\x53\x4b\x7a': function _0x15f3e3(_0x5cdf87, _0x4cfe72, _0x582f46, _0x4f7933, _0x1c1db0, _0x74eef5, _0x235b11, _0xd25c9e, _0x57210c, _0xde7ab4) {
                                    return _0x25c054[_0x2ff0('0xaa')](_0x5cdf87, _0x4cfe72, _0x582f46, _0x4f7933, _0x1c1db0, _0x74eef5, _0x235b11, _0xd25c9e, _0x57210c, _0xde7ab4);
                                },
                                '\x68\x6b\x46': function _0x2e7af3(_0x41b025, _0x5f1433) {
                                    return _0x25c054[_0x2ff0('0xab')](_0x41b025, _0x5f1433);
                                },
                                '\x65\x66\x41': function _0x336d8b(_0x1da797) {
                                    return _0x25c054[_0x2ff0('0xac')](_0x1da797);
                                },
                                '\x52\x7a\x4d': function _0x31abaf(_0x98445f, _0x1f2ae8) {
                                    return _0x25c054[_0x2ff0('0xad')](_0x98445f, _0x1f2ae8);
                                },
                                '\x49\x4e\x4f': function _0x519e74(_0x4a7b4c, _0x1150d3, _0x281b7e, _0x498a42, _0x5440c6, _0x5c2c99, _0x6fc4d2, _0x5dfe95, _0x3fcdb7, _0x43ec09, _0x40e2b5, _0x11d016) {
                                    return _0x25c054[_0x2ff0('0xae')](_0x4a7b4c, _0x1150d3, _0x281b7e, _0x498a42, _0x5440c6, _0x5c2c99, _0x6fc4d2, _0x5dfe95, _0x3fcdb7, _0x43ec09, _0x40e2b5, _0x11d016);
                                },
                                '\x61\x75\x49': function _0x55df12(_0x3276c4, _0x3a82ca) {
                                    return _0x25c054[_0x2ff0('0xab')](_0x3276c4, _0x3a82ca);
                                },
                                '\x42\x41\x59': function _0x7ecc13(_0xce8f5b, _0x51b170) {
                                    return _0x25c054[_0x2ff0('0xab')](_0xce8f5b, _0x51b170);
                                },
                                '\x7a\x6d\x62': function _0x301ff6(_0x32c7ce) {
                                    return _0x25c054[_0x2ff0('0xaf')](_0x32c7ce);
                                },
                                '\x4a\x5a\x4e': function _0x363105(_0x356121, _0x3d10a0, _0x531b4c, _0x32318d, _0xf2f4f8) {
                                    return _0x25c054[_0x2ff0('0xb0')](_0x356121, _0x3d10a0, _0x531b4c, _0x32318d, _0xf2f4f8);
                                },
                                '\x56\x4f\x4e': function _0x369daf(_0x450d80, _0x1bb708) {
                                    return _0x25c054[_0x2ff0('0xb1')](_0x450d80, _0x1bb708);
                                }
                            };
                            nc1[_0x2ff0('0xc')]();
                            if (_0x25c054[_0x2ff0('0xb2')](_0x2ced80, jst2)) {
                                var _0x17fead = _0x2ff0('0xb3')[_0x2ff0('0x4')]('\x7c'), _0x5b8683 = 0x0;
                                while (!![]) {
                                    switch (_0x17fead[_0x5b8683++]) {
                                    case '0':
                                        _0x25c054[_0x2ff0('0xb4')](UI1);
                                        continue;
                                    case '1':
                                        _0x25c054[_0x2ff0('0xb5')](TipMes, _0x2ff0('0xb6'));
                                        continue;
                                    case '2':
                                        ;
                                        continue;
                                    case '3':
                                        _0x25c054[_0x2ff0('0xb5')](Connect, _0x2ff0('0xb7'));
                                        continue;
                                    case '4':
                                        ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                try {
                                                    n0$ = _0x2699bb[_0x2ff0('0xb8')](NewView, 'LL', _0x2699bb[_0x2ff0('0xb9')](_0x2699bb[_0x2ff0('0xba')](H), 0.3), _0x2699bb[_0x2ff0('0xb9')](_0x2699bb[_0x2ff0('0xba')](H), 0.3), 'CC', 0x1, 0x2, null, 0x0, null);
                                                    n0$[_0x2ff0('0xbb')](_0x2699bb[_0x2ff0('0xbc')](BaseT, Base));
                                                    nc0$ = _0x2699bb[_0x2ff0('0xbd')](NewCDV, 0x2, null, 0x0, n0$, _0x2699bb[_0x2ff0('0xb9')](_0x2699bb[_0x2ff0('0xba')](H), 0.3), _0x2699bb[_0x2ff0('0xbe')](_0x2699bb[_0x2ff0('0xba')](H), 0.3), ![], ![], 'CT', 0x0, _0x2699bb[_0x2ff0('0xbf')](_0x2699bb[_0x2ff0('0xc0')](H), 0.02));
                                                } catch (_0x39a639) {
                                                    _0x2699bb[_0x2ff0('0xbc')](print, _0x39a639);
                                                }
                                                ;
                                                _0x2699bb[_0x2ff0('0xc1')](UIPlumb, n0$, -0x64, 0x0, 0x1f4);
                                            }
                                        }));
                                        continue;
                                    case '5':
                                        ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                    '\x72\x75\x6e': function () {
                                                        _0x2699bb[_0x2ff0('0xc2')](Connect, _0x2ff0('0xc3'));
                                                    }
                                                }), 0x141e);
                                            }
                                        }));
                                        continue;
                                    case '6':
                                        ;
                                        continue;
                                    case '7':
                                        if (_0x25c054[_0x2ff0('0xb2')](i, 0x5) && _0x25c054[_0x2ff0('0xb2')](l, -0x1)) {
                                        } else {
                                            ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                '\x72\x75\x6e': function () {
                                                    new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                        '\x72\x75\x6e': function () {
                                                            var _0x5d6c8b = com[_0x2ff0('0xc4')][_0x2ff0('0xc5')][_0x2ff0('0xc6')][_0x2ff0('0xc7')][_0x2ff0('0xc8')]();
                                                            _0x5d6c8b[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                                '\x72\x75\x6e': function () {
                                                                    _0x5d6c8b[_0x2ff0('0xc9')]();
                                                                }
                                                            }));
                                                        }
                                                    }), 0x1388);
                                                }
                                            }));
                                            _0x25c054[_0x2ff0('0xb5')](TipMes, _0x2ff0('0xca'));
                                        }
                                        continue;
                                    case '8':
                                        if (_0x25c054[_0x2ff0('0xcb')](mod, 0x2)) {
                                            ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                '\x72\x75\x6e': function () {
                                                    new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                        '\x72\x75\x6e': function () {
                                                            var _0x73e0c5 = com[_0x2ff0('0xc4')][_0x2ff0('0xc5')][_0x2ff0('0xc6')][_0x2ff0('0xc7')][_0x2ff0('0xc8')]();
                                                            _0x73e0c5[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                                '\x72\x75\x6e': function () {
                                                                    _0x73e0c5[_0x2ff0('0xc9')]();
                                                                }
                                                            }));
                                                        }
                                                    }), 0x1388);
                                                }
                                            }));
                                            _0x25c054[_0x2ff0('0xb5')](TipMes, _0x2ff0('0xca'));
                                        }
                                        continue;
                                    }
                                    break;
                                }
                            } else if (_0x25c054[_0x2ff0('0xb2')](_0x2ced80, jst4)) {
                                if (_0x25c054[_0x2ff0('0xcc')](mod, 0x0)) {
                                    if (_0x25c054[_0x2ff0('0x9e')](i, 0x5) && _0x25c054[_0x2ff0('0x9e')](l, -0x1)) {
                                        mod = 0x2;
                                        _0x25c054[_0x2ff0('0xb0')](UIFadein, vn0, 0x64, 0x0, 0x3e8);
                                        _0x25c054[_0x2ff0('0xb0')](UIFadein, vn1, 0x64, 0x0, 0x3e8);
                                        ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                var _0x23f9f0 = {
                                                    '\x73\x6e\x53': function _0x799aa8(_0x580bea, _0x4ba9c7) {
                                                        return _0x42b56d[_0x2ff0('0xcd')](_0x580bea, _0x4ba9c7);
                                                    },
                                                    '\x4e\x42\x52': function _0x1258e3(_0x4b01af, _0x289f28) {
                                                        return _0x42b56d[_0x2ff0('0xce')](_0x4b01af, _0x289f28);
                                                    },
                                                    '\x4c\x51\x4f': function _0x5d2523(_0x2a3ecc, _0x5b1155) {
                                                        return _0x42b56d[_0x2ff0('0xcf')](_0x2a3ecc, _0x5b1155);
                                                    },
                                                    '\x57\x61\x6a': function _0x5548ab(_0x1bb37f) {
                                                        return _0x42b56d[_0x2ff0('0xd0')](_0x1bb37f);
                                                    },
                                                    '\x6d\x48\x50': function _0x14896a(_0x3fa740, _0x5a1af4) {
                                                        return _0x42b56d[_0x2ff0('0xd1')](_0x3fa740, _0x5a1af4);
                                                    }
                                                };
                                                new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                    '\x72\x75\x6e': function () {
                                                        pl0[_0x2ff0('0xc')]();
                                                        pl1[_0x2ff0('0xc')]();
                                                        if (_0x23f9f0[_0x2ff0('0xd2')](_0x23f9f0[_0x2ff0('0xd3')](CheckFiles, _0x23f9f0[_0x2ff0('0xd4')](android['os'][_0x2ff0('0xd5')][_0x2ff0('0xd6')](), _0x2ff0('0xd7'))), ![])) {
                                                            new java['io'][_0x2ff0('0xd8')](_0x23f9f0[_0x2ff0('0xd4')](android['os'][_0x2ff0('0xd5')][_0x2ff0('0xd6')](), _0x2ff0('0xd7')))[_0x2ff0('0xd9')]();
                                                            _0x23f9f0[_0x2ff0('0xda')](挂墙);
                                                        } else {
                                                            _0x23f9f0[_0x2ff0('0xdb')](jslog, jst2);
                                                        }
                                                        ;
                                                    }
                                                }), 0x3e8);
                                            }
                                        }));
                                    } else {
                                        ctx[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                new android['os'][_0x2ff0('0x5')]()[_0x2ff0('0x6')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                    '\x72\x75\x6e': function () {
                                                        var _0x41afc8 = com[_0x2ff0('0xc4')][_0x2ff0('0xc5')][_0x2ff0('0xc6')][_0x2ff0('0xc7')][_0x2ff0('0xc8')]();
                                                        _0x41afc8[_0x2ff0('0x0')](new java[_0x2ff0('0x1')][_0x2ff0('0x2')]({
                                                            '\x72\x75\x6e': function () {
                                                                _0x41afc8[_0x2ff0('0xc9')]();
                                                            }
                                                        }));
                                                    }
                                                }), 0x1388);
                                            }
                                        }));
                                        _0x25c054[_0x2ff0('0x9f')](TipMes, _0x2ff0('0xca'));
                                        _0x25c054[_0x2ff0('0x9f')](Connect, _0x2ff0('0xdc'));
                                    }
                                    ;
                                } else {
                                }
                                ;
                            }
                            ;
                        });
                        continue;
                    case '1':
                        nc1 = _0x25c054[_0x2ff0('0xdd')](NewCDV, 0x0, _0x2ff0('0xde'), 0x0, n0, -0x1, -0x1, ![], !![], 'CC', 0x0, 0x0);
                        continue;
                    case '2':
                        n0 = _0x25c054[_0x2ff0('0xdf')](NewView, 'LL', _0x25c054[_0x2ff0('0xa7')](_0x25c054[_0x2ff0('0xa8')](W), 0.629), _0x25c054[_0x2ff0('0xa7')](_0x25c054[_0x2ff0('0xe0')](H), 0.75), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    case '3':
                        t1 = _0x25c054[_0x2ff0('0xe1')](NewText, _0x2ced80, 'LT', 0xd, _0x2ff0('0x32'));
                        continue;
                    case '4':
                        n1[_0x2ff0('0x17')](n4);
                        continue;
                    case '5':
                        n0[_0x2ff0('0x17')](n1);
                        continue;
                    case '6':
                        n4[_0x2ff0('0x17')](n5);
                        continue;
                    case '7':
                        t2 = _0x25c054[_0x2ff0('0xe2')](NewText, '\u786e\u5b9a', 'CC', 0xf, _0x2ff0('0x32'));
                        continue;
                    case '8':
                        n3 = _0x25c054[_0x2ff0('0xdf')](NewView, 'SV', _0x25c054[_0x2ff0('0xe3')](_0x25c054[_0x2ff0('0xe0')](W), 0.613), _0x25c054[_0x2ff0('0xe4')](_0x25c054[_0x2ff0('0xe5')](_0x25c054[_0x2ff0('0xe6')](H), 0.65), _0x25c054[_0x2ff0('0xe5')](_0x25c054[_0x2ff0('0xe7')](W), 0.008)), null, null, 0x1, [
                            null,
                            _0x2ff0('0xa9')
                        ], [
                            0xf,
                            0xf,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '9':
                        n5[_0x2ff0('0x17')](t2);
                        continue;
                    case '10':
                        n3[_0x2ff0('0x17')](t1);
                        continue;
                    case '11':
                        n1[_0x2ff0('0x17')](n2);
                        continue;
                    case '12':
                        if (_0x25c054[_0x2ff0('0xcb')](nc1, null)) {
                            nc1[_0x2ff0('0xc')]();
                        }
                        continue;
                    case '13':
                        ;
                        continue;
                    case '14':
                        n1 = _0x25c054[_0x2ff0('0xdf')](NewView, 'LL', _0x25c054[_0x2ff0('0xe5')](_0x25c054[_0x2ff0('0xe7')](W), 0.629), _0x25c054[_0x2ff0('0xe8')](_0x25c054[_0x2ff0('0xe9')](H), 0.75), 'CC', 0x1, 0x1, [
                            'RT',
                            _0x2ff0('0xea'),
                            _0x2ff0('0xeb')
                        ], 0xf, null);
                        continue;
                    case '15':
                        n2[_0x2ff0('0x17')](n3);
                        continue;
                    case '16':
                        n4 = _0x25c054[_0x2ff0('0xec')](NewView, 'LL', _0x25c054[_0x2ff0('0xe8')](_0x25c054[_0x2ff0('0xed')](W), 0.629), _0x25c054[_0x2ff0('0xe8')](_0x25c054[_0x2ff0('0xed')](H), 0.1), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    case '17':
                        n2 = _0x25c054[_0x2ff0('0xec')](NewView, 'LL', _0x25c054[_0x2ff0('0xe8')](_0x25c054[_0x2ff0('0xed')](W), 0.613), _0x25c054[_0x2ff0('0xee')](_0x25c054[_0x2ff0('0xed')](H), 0.65), 'CB', 0x1, 0x0, _0x2ff0('0xef'), null, null);
                        continue;
                    }
                    break;
                }
            } catch (_0x24021f) {
                _0x25c054[_0x2ff0('0xf0')](print, _0x24021f);
            }
            _0x25c054[_0x2ff0('0xf1')](UIPlumb, n1, 0x64, 0x0, 0xc8);
            _0x25c054[_0x2ff0('0xf1')](UIFadein, n0, 0x0, 0x64, 0xc8);
        }
    }));
}
;


var _0x7d82 = [
    'amRz',
    'V0Rv',
    'MnwwfDR8NXw3fDF8Nnwz',
    'SE5v',
    'V0Jp',
    'eVpY',
    'QnVN',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'ckRG',
    'd3VW',
    'RFZG',
    'Zlh4',
    'Q25S',
    'TFRx',
    'c21P',
    'WkdX',
    'YWRkVmlldw\x3d\x3d',
    'SUxX',
    'VE5N',
    'WlZw',
    'U2p1',
    'WG9W',
    'UmlJ',
    'IzAwMDAwMA\x3d\x3d',
    'aUd4',
    'cVB1',
    'ZFJh',
    'YUxU',
    'cG9Y',
    'Qk1E',
    'V0NZ',
    'S2Vv',
    'anND',
    'ZEdO',
    'ZHJS',
    'dWJH',
    'RURU',
    'a1RD',
    'aU9s',
    'TWlZ',
    'YVpn',
    'ZWpt',
    'YlNq',
    'RFZL',
    'RWR4',
    'eGFj',
    'R1VM',
    'SnFn',
    'aGVI',
    'SnJn',
    'blZC',
    'eGdJ',
    'bnRW',
    'U1N2',
    'Tlhz',
    'bUNh',
    'dnBZ',
    'S1NG',
    'bW9qYW5n',
    'bWluZWNyYWZ0cGU\x3d',
    'TWFpbkFjdGl2aXR5',
    'Y3VycmVudE1haW5BY3Rpdml0eQ\x3d\x3d',
    'Z2V0',
    'ZmluaXNo',
    'YldH',
    '5p2D6ZmQ5pyJ6K\x2bv77yB',
    'U3pP',
    'Y2pK',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'M3wyfDR8MHw1fDE\x3d',
    'c3BsaXQ\x3d',
    'c2V0QmFja2dyb3VuZA\x3d\x3d',
    'cHFP',
    'UUpq',
    'SEpV',
    'ZGlzbWlzcw\x3d\x3d',
    'bUJ1',
    'Y0ZL',
    'RmdL',
    'eVlC',
    'RlZS',
    'WENi',
    'Qk5H',
    'amdO',
    'c3V3',
    'NXw0fDB8M3wxfDI\x3d',
    'MzJ8MzB8MjB8MjR8MzZ8MXwzNXw2fDIzfDIyfDExfDM3fDEwfDN8Mjl8MHw0fDI3fDE4fDE5fDIxfDd8MTN8NXwxNXwzMXwxMnwyOHwyNnwzM3wyNXwxN3wxNnwxNHw5fDM0fDJ8OA\x3d\x3d',
    'Sk5t',
    'Q1VU',
    'ZGdx',
    'emFY',
    'UExx',
    'I2I0ZjVmNWY1'
];
(function (_0x401b83, _0x1bc292) {
    var _0xefd39a = function (_0xf80819) {
        while (--_0xf80819) {
            _0x401b83['\x70\x75\x73\x68'](_0x401b83['\x73\x68\x69\x66\x74']());
        }
    };
    _0xefd39a(++_0x1bc292);
}(_0x7d82, 0x1c5));
var _0x27d8 = function (_0x44c8c3, _0x33fb70) {
    _0x44c8c3 = _0x44c8c3 - 0x0;
    var _0xb69fa6 = _0x7d82[_0x44c8c3];
    if (_0x27d8['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x482a6a = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x2a59ee = _0x482a6a();
            var _0x39fddd = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x2a59ee['\x61\x74\x6f\x62'] || (_0x2a59ee['\x61\x74\x6f\x62'] = function (_0x351381) {
                var _0x1ea8ca = String(_0x351381)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x1a7eec = 0x0, _0x4622ec, _0x350063, _0x4c01a7 = 0x0, _0x505374 = ''; _0x350063 = _0x1ea8ca['\x63\x68\x61\x72\x41\x74'](_0x4c01a7++); ~_0x350063 && (_0x4622ec = _0x1a7eec % 0x4 ? _0x4622ec * 0x40 + _0x350063 : _0x350063, _0x1a7eec++ % 0x4) ? _0x505374 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x4622ec >> (-0x2 * _0x1a7eec & 0x6)) : 0x0) {
                    _0x350063 = _0x39fddd['\x69\x6e\x64\x65\x78\x4f\x66'](_0x350063);
                }
                return _0x505374;
            });
        }());
        _0x27d8['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x20c243) {
            var _0x37d221 = atob(_0x20c243);
            var _0x57b010 = [];
            for (var _0x4ecdd0 = 0x0, _0x24c465 = _0x37d221['\x6c\x65\x6e\x67\x74\x68']; _0x4ecdd0 < _0x24c465; _0x4ecdd0++) {
                _0x57b010 += '\x25' + ('\x30\x30' + _0x37d221['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x4ecdd0)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x57b010);
        };
        _0x27d8['\x64\x61\x74\x61'] = {};
        _0x27d8['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x27d8['\x64\x61\x74\x61'][_0x44c8c3] === undefined) {
        _0xb69fa6 = _0x27d8['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0xb69fa6);
        _0x27d8['\x64\x61\x74\x61'][_0x44c8c3] = _0xb69fa6;
    } else {
        _0xb69fa6 = _0x27d8['\x64\x61\x74\x61'][_0x44c8c3];
    }
    return _0xb69fa6;
};
var bc1;
var ec1;
function UI1() {
    var _0xd366be = {
        '\x46\x56\x52': function _0xa3ac4(_0x46ac15, _0x394e18) {
            return _0x46ac15 != _0x394e18;
        },
        '\x58\x43\x62': function _0x5508a3(_0x1ca428) {
            return _0x1ca428();
        }
    };
    ctx[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x1ee1af = {
                '\x70\x71\x4f': function _0x477ebb(_0x181175, _0x51b83f) {
                    return _0x181175(_0x51b83f);
                },
                '\x51\x4a\x6a': function _0x3b07d6(_0x513155, _0xe65c41, _0x204901, _0xfef771, _0x57fc66, _0x2a52f0, _0x236274) {
                    return _0x513155(_0xe65c41, _0x204901, _0xfef771, _0x57fc66, _0x2a52f0, _0x236274);
                },
                '\x48\x4a\x55': function _0x1ee5f3(_0x333408, _0x282cd1) {
                    return _0x333408 != _0x282cd1;
                },
                '\x6d\x42\x75': function _0x584b23(_0x17cd0c, _0x523ec0, _0x39262f, _0x365e2b, _0x2dfe41, _0x129787, _0x47ffa1, _0x36f23f, _0x1c376a, _0x104951) {
                    return _0x17cd0c(_0x523ec0, _0x39262f, _0x365e2b, _0x2dfe41, _0x129787, _0x47ffa1, _0x36f23f, _0x1c376a, _0x104951);
                },
                '\x63\x46\x4b': function _0x2b7c7d(_0x72337d, _0x44bcf5) {
                    return _0x72337d * _0x44bcf5;
                },
                '\x46\x67\x4b': function _0x2e1b0a(_0x492e89) {
                    return _0x492e89();
                },
                '\x79\x59\x42': function _0x555024(_0x1f74da, _0x2e7810) {
                    return _0x1f74da * _0x2e7810;
                },
                '\x42\x4e\x47': function _0x2dad43(_0x102481, _0x7791bf, _0x1fbbb3, _0x17c847, _0x579086, _0xe4052f, _0x39475a, _0x4838a7, _0x533e0f, _0x5984d1, _0x556f92, _0xd6e281) {
                    return _0x102481(_0x7791bf, _0x1fbbb3, _0x17c847, _0x579086, _0xe4052f, _0x39475a, _0x4838a7, _0x533e0f, _0x5984d1, _0x556f92, _0xd6e281);
                },
                '\x6a\x67\x4e': function _0x4e2c54(_0x437f28, _0x24acf5) {
                    return _0x437f28 * _0x24acf5;
                },
                '\x73\x75\x77': function _0x22124d(_0x6904fb) {
                    return _0x6904fb();
                }
            };
            var _0xa5981d = _0x27d8('0x3')[_0x27d8('0x4')]('\x7c'), _0x27807e = 0x0;
            while (!![]) {
                switch (_0xa5981d[_0x27807e++]) {
                case '0':
                    b1[_0x27d8('0x5')](_0x1ee1af[_0x27d8('0x6')](BaseT, wh));
                    continue;
                case '1':
                    _0x1ee1af[_0x27d8('0x7')](UIRotate, b1, 0x0, 0x168, 0x32, 0x32, 0x12c);
                    continue;
                case '2':
                    ;
                    continue;
                case '3':
                    if (_0x1ee1af[_0x27d8('0x8')](bc1, null)) {
                        bc1[_0x27d8('0x9')]();
                        bc1 = null;
                    }
                    continue;
                case '4':
                    b1 = _0x1ee1af[_0x27d8('0xa')](NewView, 'LL', _0x1ee1af[_0x27d8('0xb')](_0x1ee1af[_0x27d8('0xc')](H), 0.1), _0x1ee1af[_0x27d8('0xd')](_0x1ee1af[_0x27d8('0xc')](H), 0.1), 'CC', 0x1, 0x2, null, 0x0, function (_0x2a40fa) {
                        if (_0xd366be[_0x27d8('0xe')](bc1, null)) {
                            bc1[_0x27d8('0x9')]();
                            bc1 = null;
                        }
                        ;
                        _0xd366be[_0x27d8('0xf')](UI2);
                    });
                    continue;
                case '5':
                    bc1 = _0x1ee1af[_0x27d8('0x10')](NewCDV, 0x2, null, 0x0, b1, _0x1ee1af[_0x27d8('0x11')](_0x1ee1af[_0x27d8('0xc')](H), 0.1), _0x1ee1af[_0x27d8('0x11')](_0x1ee1af[_0x27d8('0x12')](H), 0.1), ![], !![], 'RT', 0x1e, 0x0);
                    continue;
                }
                break;
            }
        }
    }));
}
;
function UI2() {
    var _0x44e752 = {
        '\x4b\x53\x46': function _0x3854d5(_0x3fac82, _0x5604f2) {
            return _0x3fac82 != _0x5604f2;
        },
        '\x62\x57\x47': function _0x37ad69(_0x1c2544, _0x4d4cb3) {
            return _0x1c2544(_0x4d4cb3);
        },
        '\x53\x7a\x4f': function _0x582c49(_0x5df28b, _0x202704) {
            return _0x5df28b == _0x202704;
        },
        '\x63\x6a\x4a': function _0x52343a(_0x167495) {
            return _0x167495();
        }
    };
    var _0x1ed6a7 = _0x27d8('0x13')[_0x27d8('0x4')]('\x7c'), _0x4d94a3 = 0x0;
    while (!![]) {
        switch (_0x1ed6a7[_0x4d94a3++]) {
        case '0':
            ;
            continue;
        case '1':
            ;
            continue;
        case '2':
            ctx[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                '\x72\x75\x6e': function () {
                    var _0xaac948 = {
                        '\x4a\x4e\x6d': function _0x485411(_0x274f2e, _0x28fe50, _0x41a4cd, _0x3ab1c6, _0x21e1cd, _0x5a24d3, _0x4452d1, _0x25453a, _0xcf1c75, _0x57d99c) {
                            return _0x274f2e(_0x28fe50, _0x41a4cd, _0x3ab1c6, _0x21e1cd, _0x5a24d3, _0x4452d1, _0x25453a, _0xcf1c75, _0x57d99c);
                        },
                        '\x43\x55\x54': function _0x21ff3e(_0x1ebf24, _0x8ac323) {
                            return _0x1ebf24 * _0x8ac323;
                        },
                        '\x64\x67\x71': function _0x29740d(_0x3f4e4b) {
                            return _0x3f4e4b();
                        },
                        '\x7a\x61\x58': function _0x599d60(_0x46cec3, _0x1e245e) {
                            return _0x46cec3 * _0x1e245e;
                        },
                        '\x50\x4c\x71': function _0xa91a3b(_0x18aa2e) {
                            return _0x18aa2e();
                        },
                        '\x6a\x64\x73': function _0x5bf2e6(_0x1c6f75, _0x40c7bd) {
                            return _0x1c6f75 * _0x40c7bd;
                        },
                        '\x57\x44\x6f': function _0x5a73ed(_0xcc3fb9) {
                            return _0xcc3fb9();
                        },
                        '\x66\x58\x78': function _0x250cb7(_0x12061c, _0x4026e0, _0x4bb681, _0x35b967, _0x1c2645) {
                            return _0x12061c(_0x4026e0, _0x4bb681, _0x35b967, _0x1c2645);
                        },
                        '\x43\x6e\x52': function _0x11b0ef(_0x572e0a, _0xc700dd, _0x281143, _0x14ee18, _0x13cda3, _0x1cefaf, _0x592e28, _0x5cab07, _0x5343c8, _0x306fbe) {
                            return _0x572e0a(_0xc700dd, _0x281143, _0x14ee18, _0x13cda3, _0x1cefaf, _0x592e28, _0x5cab07, _0x5343c8, _0x306fbe);
                        },
                        '\x4c\x54\x71': function _0x5310d2(_0x152c9a, _0x5e7a0c) {
                            return _0x152c9a * _0x5e7a0c;
                        },
                        '\x73\x6d\x4f': function _0x25d07c(_0x5b8cc5) {
                            return _0x5b8cc5();
                        },
                        '\x5a\x47\x57': function _0x585e35(_0x35e6ad, _0x1b8637, _0xfdd30c, _0xf25743, _0x299345, _0x223f6f, _0x306bc6, _0x3e0640, _0x569a7b, _0x41e438) {
                            return _0x35e6ad(_0x1b8637, _0xfdd30c, _0xf25743, _0x299345, _0x223f6f, _0x306bc6, _0x3e0640, _0x569a7b, _0x41e438);
                        },
                        '\x49\x4c\x57': function _0x682d0f(_0x112939, _0x4f9f83, _0x7750d8, _0x473fe3, _0x104d06, _0x4cef7e, _0x2f95c8, _0x2b78cc, _0x359f5b, _0x115100) {
                            return _0x112939(_0x4f9f83, _0x7750d8, _0x473fe3, _0x104d06, _0x4cef7e, _0x2f95c8, _0x2b78cc, _0x359f5b, _0x115100);
                        },
                        '\x54\x4e\x4d': function _0x23ba0e(_0x31f224, _0x5aa950) {
                            return _0x31f224 * _0x5aa950;
                        },
                        '\x5a\x56\x70': function _0x16edcc(_0x1e8bd5) {
                            return _0x1e8bd5();
                        },
                        '\x53\x6a\x75': function _0x4f97ac(_0x3e17b1) {
                            return _0x3e17b1();
                        },
                        '\x52\x69\x49': function _0xdc154f(_0x485240, _0x28b138, _0xa2aa15, _0x466f76, _0x5265aa) {
                            return _0x485240(_0x28b138, _0xa2aa15, _0x466f76, _0x5265aa);
                        },
                        '\x69\x47\x78': function _0x4dee9e(_0x297a41, _0x5237d6, _0x2c0559, _0x23d663, _0x1dae36) {
                            return _0x297a41(_0x5237d6, _0x2c0559, _0x23d663, _0x1dae36);
                        },
                        '\x71\x50\x75': function _0x1b395a(_0x2e1240, _0xf7937c, _0x50acc2, _0x338208, _0xa779a, _0x2e1db0, _0x411f43) {
                            return _0x2e1240(_0xf7937c, _0x50acc2, _0x338208, _0xa779a, _0x2e1db0, _0x411f43);
                        },
                        '\x64\x52\x61': function _0x676d7d(_0x1241a4, _0xa74a66, _0x4637ae, _0x26e8f7, _0xda302e, _0x46e3d5, _0x5d079f, _0x710114, _0x2e44e1, _0x3d78a8) {
                            return _0x1241a4(_0xa74a66, _0x4637ae, _0x26e8f7, _0xda302e, _0x46e3d5, _0x5d079f, _0x710114, _0x2e44e1, _0x3d78a8);
                        },
                        '\x61\x4c\x54': function _0x1140ba(_0x3f3ea3) {
                            return _0x3f3ea3();
                        },
                        '\x70\x6f\x58': function _0x1179d6(_0x2a0801, _0x514b53, _0x255bb8, _0x1523cf, _0x225175, _0x26220e, _0x130e8b, _0x4802b2, _0x1783dc, _0x3070c7) {
                            return _0x2a0801(_0x514b53, _0x255bb8, _0x1523cf, _0x225175, _0x26220e, _0x130e8b, _0x4802b2, _0x1783dc, _0x3070c7);
                        },
                        '\x42\x4d\x44': function _0x2dd0cd(_0x5cfbad) {
                            return _0x5cfbad();
                        },
                        '\x57\x43\x59': function _0xd69f04(_0x4e8702) {
                            return _0x4e8702();
                        },
                        '\x4b\x65\x6f': function _0x5dfa79(_0xddfb4b, _0x577308, _0x504fc6, _0x4a3efd, _0x5722fa) {
                            return _0xddfb4b(_0x577308, _0x504fc6, _0x4a3efd, _0x5722fa);
                        },
                        '\x6a\x73\x43': function _0x46132a(_0x5c99a3, _0x4b45bb, _0xbc380a, _0x10c59e, _0x23ce96, _0x46572a, _0x2fc527, _0x5f188d, _0x1f484e, _0x209555) {
                            return _0x5c99a3(_0x4b45bb, _0xbc380a, _0x10c59e, _0x23ce96, _0x46572a, _0x2fc527, _0x5f188d, _0x1f484e, _0x209555);
                        },
                        '\x64\x47\x4e': function _0x49a85f(_0x1557b8) {
                            return _0x1557b8();
                        },
                        '\x75\x62\x47': function _0x1f47db(_0x1b9559, _0x58f8c2, _0x21b378, _0x273283, _0x21658d, _0x3f3473, _0x26120b, _0x384a26, _0x3d870d, _0x58e9e7) {
                            return _0x1b9559(_0x58f8c2, _0x21b378, _0x273283, _0x21658d, _0x3f3473, _0x26120b, _0x384a26, _0x3d870d, _0x58e9e7);
                        },
                        '\x45\x44\x54': function _0x4f1080(_0x4cfe3d) {
                            return _0x4cfe3d();
                        },
                        '\x6b\x54\x43': function _0x402344(_0x494da8, _0x35ba6e) {
                            return _0x494da8 * _0x35ba6e;
                        },
                        '\x69\x4f\x6c': function _0x2ab468(_0x378467) {
                            return _0x378467();
                        },
                        '\x4d\x69\x59': function _0x273643(_0x1ed0d2) {
                            return _0x1ed0d2();
                        },
                        '\x61\x5a\x67': function _0x3d0009(_0xbde52b, _0x4b4d28) {
                            return _0xbde52b * _0x4b4d28;
                        },
                        '\x65\x6a\x6d': function _0x39745c(_0x3706c9) {
                            return _0x3706c9();
                        },
                        '\x62\x53\x6a': function _0x516d1c(_0x57aa74, _0x28b502, _0x1eb70a, _0x15f2e5, _0xfc1ccd, _0x35a1b8, _0x493d47, _0x4c4f73, _0xad3044, _0x1ed210) {
                            return _0x57aa74(_0x28b502, _0x1eb70a, _0x15f2e5, _0xfc1ccd, _0x35a1b8, _0x493d47, _0x4c4f73, _0xad3044, _0x1ed210);
                        },
                        '\x44\x56\x4b': function _0x45ceca(_0x15de0b) {
                            return _0x15de0b();
                        },
                        '\x45\x64\x78': function _0x59287d(_0x1e3003, _0x59f865) {
                            return _0x1e3003 * _0x59f865;
                        },
                        '\x78\x61\x63': function _0x56c7d7(_0x2505db, _0x1d08e3) {
                            return _0x2505db != _0x1d08e3;
                        },
                        '\x47\x55\x4c': function _0x40cfe9(_0xd61a93, _0x5e5043, _0x3a5f21, _0x72da9c, _0x3e296c, _0x55deb3, _0x46d9e5, _0x37f490, _0x1c50a1, _0x5cd969, _0x5b9c2f, _0x69900b) {
                            return _0xd61a93(_0x5e5043, _0x3a5f21, _0x72da9c, _0x3e296c, _0x55deb3, _0x46d9e5, _0x37f490, _0x1c50a1, _0x5cd969, _0x5b9c2f, _0x69900b);
                        },
                        '\x4a\x71\x67': function _0xcd565d(_0x52342a, _0x497efc, _0x5ddb1a, _0x57dade, _0x4cdb15, _0x4e9819, _0x22646d, _0x469031, _0x2e6fa5, _0x53f3a0) {
                            return _0x52342a(_0x497efc, _0x5ddb1a, _0x57dade, _0x4cdb15, _0x4e9819, _0x22646d, _0x469031, _0x2e6fa5, _0x53f3a0);
                        },
                        '\x68\x65\x48': function _0x1de880(_0x96cab6, _0xe2537) {
                            return _0x96cab6 * _0xe2537;
                        },
                        '\x4a\x72\x67': function _0x2f0429(_0x58de09) {
                            return _0x58de09();
                        },
                        '\x6e\x56\x42': function _0x41fbca(_0x41c84) {
                            return _0x41c84();
                        },
                        '\x78\x67\x49': function _0xb67425(_0x475036, _0x54e167, _0x4a54b4, _0x3b2800, _0x326c1c, _0x57cb73, _0x46e761, _0x567ba5, _0x254439, _0x580efc) {
                            return _0x475036(_0x54e167, _0x4a54b4, _0x3b2800, _0x326c1c, _0x57cb73, _0x46e761, _0x567ba5, _0x254439, _0x580efc);
                        },
                        '\x6e\x74\x56': function _0x503661(_0x23b666, _0x3a6b5f, _0x1f5d22, _0x12862e, _0x3c5e31, _0x5798a4, _0x3dafc2, _0x51b207, _0x33cc0f, _0x26381b) {
                            return _0x23b666(_0x3a6b5f, _0x1f5d22, _0x12862e, _0x3c5e31, _0x5798a4, _0x3dafc2, _0x51b207, _0x33cc0f, _0x26381b);
                        },
                        '\x53\x53\x76': function _0x47a447(_0x3e1c9d, _0x43130a) {
                            return _0x3e1c9d * _0x43130a;
                        },
                        '\x4e\x58\x73': function _0x2681cc(_0x48a059) {
                            return _0x48a059();
                        },
                        '\x6d\x43\x61': function _0x510cec(_0x4b2df3, _0x107986) {
                            return _0x4b2df3 * _0x107986;
                        }
                    };
                    var _0x17df9c = _0x27d8('0x14')[_0x27d8('0x4')]('\x7c'), _0x34a46c = 0x0;
                    while (!![]) {
                        switch (_0x17df9c[_0x34a46c++]) {
                        case '0':
                            n10 = _0xaac948[_0x27d8('0x15')](NewView, 'LL', _0xaac948[_0x27d8('0x16')](_0xaac948[_0x27d8('0x17')](H), 0.1), _0xaac948[_0x27d8('0x18')](_0xaac948[_0x27d8('0x19')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x517c9c) {
                            });
                            continue;
                        case '1':
                            n2 = _0xaac948[_0x27d8('0x15')](NewView, 'LL', _0xaac948[_0x27d8('0x1b')](_0xaac948[_0x27d8('0x19')](H), 0.1), _0xaac948[_0x27d8('0x1b')](_0xaac948[_0x27d8('0x1c')](H), 0.1), 'CB', 0x1, 0x2, null, null, function (_0x5d5d4a) {
                                var _0x41fe1a = {
                                    '\x48\x4e\x6f': function _0x2b517a(_0x138062, _0xe71129, _0x3f930a, _0x161d4d, _0x1ee828) {
                                        return _0x138062(_0xe71129, _0x3f930a, _0x161d4d, _0x1ee828);
                                    },
                                    '\x57\x42\x69': function _0x360545(_0x46a83b, _0x147e6c) {
                                        return _0x46a83b != _0x147e6c;
                                    },
                                    '\x79\x5a\x58': function _0x410676(_0x2b6b9f, _0x56056f) {
                                        return _0x2b6b9f != _0x56056f;
                                    },
                                    '\x42\x75\x4d': function _0x254673(_0x5db136) {
                                        return _0x5db136();
                                    },
                                    '\x44\x56\x46': function _0x521e43(_0xffbb86, _0x16af9a) {
                                        return _0xffbb86 != _0x16af9a;
                                    }
                                };
                                var _0x3ca76d = _0x27d8('0x1d')[_0x27d8('0x4')]('\x7c'), _0x1c4f6f = 0x0;
                                while (!![]) {
                                    switch (_0x3ca76d[_0x1c4f6f++]) {
                                    case '0':
                                        _0x41fe1a[_0x27d8('0x1e')](UIFadein, n1, 0x64, 0x0, 0x96);
                                        continue;
                                    case '1':
                                        if (_0x41fe1a[_0x27d8('0x1f')](ac2, null)) {
                                            ac2[_0x27d8('0x9')]();
                                            ac2 = null;
                                        }
                                        continue;
                                    case '2':
                                        var _0x1f36ec = {
                                            '\x72\x44\x46': function _0x31139e(_0x23b6d3, _0x198a8c) {
                                                return _0x41fe1a[_0x27d8('0x20')](_0x23b6d3, _0x198a8c);
                                            },
                                            '\x77\x75\x56': function _0x5d4cd4(_0x579575) {
                                                return _0x41fe1a[_0x27d8('0x21')](_0x579575);
                                            }
                                        };
                                        continue;
                                    case '3':
                                        ctx[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                new android['os'][_0x27d8('0x22')]()[_0x27d8('0x23')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                                                    '\x72\x75\x6e': function () {
                                                        if (_0x1f36ec[_0x27d8('0x24')](ec1, null)) {
                                                            ec1[_0x27d8('0x9')]();
                                                            ec1 = null;
                                                            _0x1f36ec[_0x27d8('0x25')](UI1);
                                                        }
                                                        ;
                                                    }
                                                }), 0x96);
                                            }
                                        }));
                                        continue;
                                    case '4':
                                        _0x41fe1a[_0x27d8('0x1e')](UIPlumb, n0, 0x0, -0x14, 0x96);
                                        continue;
                                    case '5':
                                        if (_0x41fe1a[_0x27d8('0x26')](ac1, null)) {
                                            ac1[_0x27d8('0x9')]();
                                            ac1 = null;
                                        }
                                        continue;
                                    case '6':
                                        ;
                                        continue;
                                    case '7':
                                        ;
                                        continue;
                                    }
                                    break;
                                }
                            });
                            continue;
                        case '2':
                            _0xaac948[_0x27d8('0x27')](UIFadein, n1, 0x0, 0x64, 0x96);
                            continue;
                        case '3':
                            n8 = _0xaac948[_0x27d8('0x28')](NewView, 'LL', _0xaac948[_0x27d8('0x29')](_0xaac948[_0x27d8('0x2a')](H), 0.1), _0xaac948[_0x27d8('0x29')](_0xaac948[_0x27d8('0x2a')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x260732) {
                            });
                            continue;
                        case '4':
                            n11 = _0xaac948[_0x27d8('0x2b')](NewView, 'LL', _0xaac948[_0x27d8('0x29')](_0xaac948[_0x27d8('0x2a')](H), 0.1), _0xaac948[_0x27d8('0x29')](_0xaac948[_0x27d8('0x2a')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '5':
                            n1[_0x27d8('0x2c')](n2);
                            continue;
                        case '6':
                            n2$ = _0xaac948[_0x27d8('0x2d')](NewView, 'LL', _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x2f')](H), 0.1), _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x30')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x54b085) {
                                _0x7741d6[_0x27d8('0x31')](B1);
                            });
                            continue;
                        case '7':
                            t2 = _0xaac948[_0x27d8('0x32')](NewText, 'FC', 'CC', null, _0x27d8('0x33'));
                            continue;
                        case '8':
                            _0xaac948[_0x27d8('0x34')](UIPlumb, n0, -0x14, 0x0, 0x96);
                            continue;
                        case '9':
                            _0xaac948[_0x27d8('0x35')](UIRotate, n2, -0x168, 0x0, 0x32, 0x64, 0x12c);
                            continue;
                        case '10':
                            n7 = _0xaac948[_0x27d8('0x36')](NewView, 'LL', _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x37')](H), 0.1), _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x37')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '11':
                            n5 = _0xaac948[_0x27d8('0x38')](NewView, 'LL', _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x39')](H), 0.1), _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x3a')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '12':
                            n1[_0x27d8('0x2c')](n2$);
                            continue;
                        case '13':
                            n0[_0x27d8('0x2c')](n1);
                            continue;
                        case '14':
                            n6[_0x27d8('0x2c')](t2);
                            continue;
                        case '15':
                            n2[_0x27d8('0x2c')](t0);
                            continue;
                        case '16':
                            n1[_0x27d8('0x2c')](n6);
                            continue;
                        case '17':
                            n1[_0x27d8('0x2c')](n5);
                            continue;
                        case '18':
                            t0 = _0xaac948[_0x27d8('0x3b')](NewText, '\ufe3d', 'CC', 0x16, _0x27d8('0x33'));
                            continue;
                        case '19':
                            t0$ = _0xaac948[_0x27d8('0x3b')](NewText, 'ET', 'CC', null, _0x27d8('0x33'));
                            continue;
                        case '20':
                            ;
                            continue;
                        case '21':
                            t1 = _0xaac948[_0x27d8('0x3b')](NewText, 'BT', 'CC', null, _0x27d8('0x33'));
                            continue;
                        case '22':
                            n4 = _0xaac948[_0x27d8('0x3c')](NewView, 'LL', _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x3d')](H), 0.1), _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x3d')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x130e11) {
                                _0x3a5337[_0x27d8('0x3e')](B2);
                            });
                            continue;
                        case '23':
                            n3 = _0xaac948[_0x27d8('0x3f')](NewView, 'LL', _0xaac948[_0x27d8('0x2e')](_0xaac948[_0x27d8('0x40')](H), 0.1), _0xaac948[_0x27d8('0x41')](_0xaac948[_0x27d8('0x42')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '24':
                            n0 = _0xaac948[_0x27d8('0x3f')](NewView, 'LL', _0xaac948[_0x27d8('0x41')](_0xaac948[_0x27d8('0x42')](H), 0.1), _0xaac948[_0x27d8('0x43')](H), 'CT', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '25':
                            n4[_0x27d8('0x2c')](t1);
                            continue;
                        case '26':
                            n1[_0x27d8('0x2c')](n3);
                            continue;
                        case '27':
                            n12 = _0xaac948[_0x27d8('0x3f')](NewView, 'LL', _0xaac948[_0x27d8('0x44')](_0xaac948[_0x27d8('0x43')](H), 0.1), _0xaac948[_0x27d8('0x44')](_0xaac948[_0x27d8('0x45')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x5bcb6b) {
                            });
                            continue;
                        case '28':
                            n2$[_0x27d8('0x2c')](t0$);
                            continue;
                        case '29':
                            n9 = _0xaac948[_0x27d8('0x46')](NewView, 'LL', _0xaac948[_0x27d8('0x44')](_0xaac948[_0x27d8('0x47')](H), 0.1), _0xaac948[_0x27d8('0x48')](_0xaac948[_0x27d8('0x47')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '30':
                            if (_0xaac948[_0x27d8('0x49')](ec1, null)) {
                                ec1[_0x27d8('0x9')]();
                                ec1 = null;
                            }
                            continue;
                        case '31':
                            n1[_0x27d8('0x2c')](n1$);
                            continue;
                        case '32':
                            var _0x3a5337 = {
                                '\x64\x72\x52': function _0x5f599a(_0x3d2d3c) {
                                    return _0xaac948[_0x27d8('0x47')](_0x3d2d3c);
                                }
                            };
                            continue;
                        case '33':
                            n1[_0x27d8('0x2c')](n4);
                            continue;
                        case '34':
                            ec1 = _0xaac948[_0x27d8('0x4a')](NewCDV, 0x2, null, 0x0, n0, _0xaac948[_0x27d8('0x48')](_0xaac948[_0x27d8('0x47')](H), 0.1), _0xaac948[_0x27d8('0x48')](_0xaac948[_0x27d8('0x47')](H), 0.85), ![], !![], 'RT', 0x1e, 0x0);
                            continue;
                        case '35':
                            n1$ = _0xaac948[_0x27d8('0x4b')](NewView, 'LL', _0xaac948[_0x27d8('0x4c')](_0xaac948[_0x27d8('0x4d')](H), 0.1), _0xaac948[_0x27d8('0x4c')](_0xaac948[_0x27d8('0x4e')](H), 0.04), 'CC', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '36':
                            n1 = _0xaac948[_0x27d8('0x4f')](NewView, 'LL', _0xaac948[_0x27d8('0x4c')](_0xaac948[_0x27d8('0x4e')](H), 0.1), _0xaac948[_0x27d8('0x4e')](H), 'CT', 0x1, 0x2, null, 0x0, null);
                            continue;
                        case '37':
                            n6 = _0xaac948[_0x27d8('0x50')](NewView, 'LL', _0xaac948[_0x27d8('0x51')](_0xaac948[_0x27d8('0x52')](H), 0.1), _0xaac948[_0x27d8('0x53')](_0xaac948[_0x27d8('0x52')](H), 0.1), 'CC', 0x1, 0x1, [
                                null,
                                _0x27d8('0x1a')
                            ], 0xb4, function (_0x49129c) {
                                _0x7741d6[_0x27d8('0x54')](B3);
                            });
                            continue;
                        }
                        break;
                    }
                }
            }));
            continue;
        case '3':
            if (_0x44e752[_0x27d8('0x55')](mod, 0x2)) {
                ctx[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                    '\x72\x75\x6e': function () {
                        new android['os'][_0x27d8('0x22')]()[_0x27d8('0x23')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                            '\x72\x75\x6e': function () {
                                var _0x2f6b2b = com[_0x27d8('0x56')][_0x27d8('0x57')][_0x27d8('0x58')][_0x27d8('0x59')][_0x27d8('0x5a')]();
                                _0x2f6b2b[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        _0x2f6b2b[_0x27d8('0x5b')]();
                                    }
                                }));
                            }
                        }), 0x1388);
                    }
                }));
                _0x44e752[_0x27d8('0x5c')](TipMes, _0x27d8('0x5d'));
            }
            continue;
        case '4':
            if (_0x44e752[_0x27d8('0x5e')](i, 0x5) && _0x44e752[_0x27d8('0x5e')](l, -0x1)) {
            } else {
                ctx[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                    '\x72\x75\x6e': function () {
                        new android['os'][_0x27d8('0x22')]()[_0x27d8('0x23')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                            '\x72\x75\x6e': function () {
                                var _0x17f476 = com[_0x27d8('0x56')][_0x27d8('0x57')][_0x27d8('0x58')][_0x27d8('0x59')][_0x27d8('0x5a')]();
                                _0x17f476[_0x27d8('0x0')](new java[_0x27d8('0x1')][_0x27d8('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        _0x17f476[_0x27d8('0x5b')]();
                                    }
                                }));
                            }
                        }), 0x1388);
                    }
                }));
                _0x44e752[_0x27d8('0x5c')](TipMes, _0x27d8('0x5d'));
            }
            continue;
        case '5':
            var _0x7741d6 = {
                '\x58\x6f\x56': function _0x75a49d(_0x1dc4da) {
                    return _0x44e752[_0x27d8('0x5f')](_0x1dc4da);
                },
                '\x76\x70\x59': function _0x5caa40(_0x4cf3ff) {
                    return _0x44e752[_0x27d8('0x5f')](_0x4cf3ff);
                }
            };
            continue;
        }
        break;
    }
}
;


var gb=true;
function 挂墙(){
	ctx.runOnUiThread(new java.lang.Runnable({run:function(){
				try{
					if(nc1!=null){
						nc1.dismiss();
					};
					n0=NewView("LL",W()*0.829,H()*0.95,"CC",1,2,null,null,null);
						n1=NewView("LL",W()*0.829,H()*0.95,"CC",1,1,["LR","#CE1800","#AE00FF"],15,null);
							n2=NewView("LL",W()*0.813,H()*0.85,"CB",1,0,"#11909090",null,null);
								n3=NewView("SV",W()*0.813,H()*0.85-W()*0.008,null,null,1,[null,"#80ffffff"],[15,15,0,0],null);
							n4=NewView("LL",W()*0.829,H()*0.1,"CC",1,2,null,null,null);
								n5=NewView("LL",W()*0.819,H()*0.1-W()*0.01,"CC",1,1,[null,"#80ffffff"],15,
									function(v){
										if(gb==true){
											nc1.dismiss();
											挂墙2();
										}else{
											print("再等10秒就能关");
										};
									}
								);
				var webv = new android.webkit.WebView(ctx);
				webv.loadUrl("http://bbs.huluxia.com/wap/thread/685134.html?para=37Hftt%2B037HfuN%2B037nfsd%2Bw3p%2Fftt%2B437Xfst%2Bz37Q%3D%0A&product=tool");
					t2=NewText("[挂墙-葫芦侠] 昵称''csl''｜原因:盗发文件，厚脸皮还不删","CC",15,"#000000");
							n3.addView(webv);
							n5.addView(t2);
					n0.addView(n1);
						n1.addView(n2);
							n2.addView(n3);
						n1.addView(n4);
							n4.addView(n5);
					nc1=NewCDV(0,"#64ffffff",0,n0,-1,-1,false,true,"CC",0,0);
					}catch(err){print(err)}
				}}));
				ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
	new android.os.Handler().postDelayed(new java.lang.Runnable({ run: function(){
		gb=false;
	}}),10000) }}));
		};

var _0x4994 = [
    'aG5N',
    'VFJJ',
    'IzExOTA5MDkw',
    'RnFW',
    'dEZW',
    'Z1NX',
    'ZGRN',
    'IzY0ZmZmZmZm',
    'RU5w',
    'YkVM',
    'clVl',
    'I0NFMTgwMA\x3d\x3d',
    'I0FFMDBGRg\x3d\x3d',
    'bU9Y',
    'SXp0',
    'VUh5',
    'c3VN',
    'S1pC',
    'SXlw',
    'cVVh',
    'dEJa',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    '5oyC5aKZ77yaMjAxOS0wNC0xMw\x3d\x3d',
    '4oCiIFtRUee\x2bpO\x2b9nOaIkeeahOS4lueVjOW8gOaMguelnuWZqOa4heaYjueJiF0g4oCiIDY2MDUxNjc0NA\x3d\x3d',
    '5Y6f5Zug77ya55uX5Y\x2bR5paH5Lu25LiN5Yig44CB56ew5Y6f5L2c6ICF5ZyI6ZKx44CB566h55CG5oCB5bqm6Juu5qiq5peg55CG',
    '4oCiIFtRUeWPt10g4oCiIDI0MTQ1NjY5MTPvvZwyMTk1NzU2Mjgx',
    '5Y6f5Zug77ya55uX5Y\x2bR5paH5Lu25LiN5Yig44CB57Sg6LSo5p6B5YW25L2O5LiL44CB56ew5Y6f5L2c6ICF55qE5Luj56CB6YO95piv5oqE5Yir5Lq655qE',
    '4oCiIFvokavoiqbkvqDnpL7ljLpdIOKAoiDmqLHoirEgfHwg5rC45oGS',
    '5Y6f5Zug77ya55uX5Y\x2bR5paH5Lu25LiN5Yig44CB5LiN5om\x2f6K6k5Y6f5L2c6ICF44CB56ew5Y6f5L2c6ICF5piv5LqM5pS554uX',
    '5aaC5p6c55uX5Y\x2bR5paH5Lu255qE5Lq65Li75Yqo5Yig5paH5Lu277yM5bCx5LiN5Lya5Zyo5aKZ5LiK55WZ5Y\x2b3',
    'bGVuZ3Ro',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'QW5w',
    'Z2xk',
    'NHwzfDh8MTN8N3wxNXwxNnw1fDZ8MHwxMXwxNHwxMnwxMHwyfDE3fDF8OQ\x3d\x3d',
    'c3BsaXQ\x3d',
    'ZlBI',
    'U3RhcnQgV2VIYWNr',
    'IzAwMDAwMA\x3d\x3d',
    'YWRkVmlldw\x3d\x3d',
    'cUJx',
    'ZGlzbWlzcw\x3d\x3d',
    'WW1M',
    'b1ZH',
    'QWxH',
    'WlNw',
    'IzgwZmZmZmZm',
    'ckhB',
    'b3d5',
    '5YaN562JMTDnp5LlsLHog73lhbM\x3d',
    'aFFD'
];
(function (_0x2b074e, _0x58a52d) {
    var _0x133ca3 = function (_0x55504c) {
        while (--_0x55504c) {
            _0x2b074e['\x70\x75\x73\x68'](_0x2b074e['\x73\x68\x69\x66\x74']());
        }
    };
    _0x133ca3(++_0x58a52d);
}(_0x4994, 0x15b));
var _0x4499 = function (_0x250c0f, _0x3e0f96) {
    _0x250c0f = _0x250c0f - 0x0;
    var _0x4964d3 = _0x4994[_0x250c0f];
    if (_0x4499['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x5903fb = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x4805d5 = _0x5903fb();
            var _0x483473 = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x4805d5['\x61\x74\x6f\x62'] || (_0x4805d5['\x61\x74\x6f\x62'] = function (_0x3707be) {
                var _0x1163ab = String(_0x3707be)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0xbd200f = 0x0, _0x19d91e, _0x403ad4, _0x1a4ae6 = 0x0, _0x5c712c = ''; _0x403ad4 = _0x1163ab['\x63\x68\x61\x72\x41\x74'](_0x1a4ae6++); ~_0x403ad4 && (_0x19d91e = _0xbd200f % 0x4 ? _0x19d91e * 0x40 + _0x403ad4 : _0x403ad4, _0xbd200f++ % 0x4) ? _0x5c712c += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x19d91e >> (-0x2 * _0xbd200f & 0x6)) : 0x0) {
                    _0x403ad4 = _0x483473['\x69\x6e\x64\x65\x78\x4f\x66'](_0x403ad4);
                }
                return _0x5c712c;
            });
        }());
        _0x4499['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x58d3e6) {
            var _0x504ef1 = atob(_0x58d3e6);
            var _0x278706 = [];
            for (var _0x4be657 = 0x0, _0x11c6f6 = _0x504ef1['\x6c\x65\x6e\x67\x74\x68']; _0x4be657 < _0x11c6f6; _0x4be657++) {
                _0x278706 += '\x25' + ('\x30\x30' + _0x504ef1['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x4be657)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x278706);
        };
        _0x4499['\x64\x61\x74\x61'] = {};
        _0x4499['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x4499['\x64\x61\x74\x61'][_0x250c0f] === undefined) {
        _0x4964d3 = _0x4499['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x4964d3);
        _0x4499['\x64\x61\x74\x61'][_0x250c0f] = _0x4964d3;
    } else {
        _0x4964d3 = _0x4499['\x64\x61\x74\x61'][_0x250c0f];
    }
    return _0x4964d3;
};
var jst5 = [
    _0x4499('0x0'),
    '',
    _0x4499('0x1'),
    _0x4499('0x2'),
    '',
    _0x4499('0x3'),
    _0x4499('0x4'),
    '',
    _0x4499('0x5'),
    _0x4499('0x6'),
    '',
    '',
    _0x4499('0x7')
];
var jst6 = [''];
for (a = 0x0; a < jst5[_0x4499('0x8')]; a++) {
    jst6 = jst6 + jst5[a] + '\x0a';
}
;
var gb2 = ![];
function 挂墙2() {
    var _0xad8f53 = {
        '\x41\x6e\x70': function _0x2746e1(_0x3320fd, _0x4e09c4) {
            return _0x3320fd == _0x4e09c4;
        },
        '\x67\x6c\x64': function _0x41801d(_0x1d890d, _0x641f08) {
            return _0x1d890d(_0x641f08);
        },
        '\x66\x50\x48': function _0x2e68d2(_0x1789cf, _0x302e1d, _0x2ee826, _0x2e1a3c, _0x12ca19) {
            return _0x1789cf(_0x302e1d, _0x2ee826, _0x2e1a3c, _0x12ca19);
        },
        '\x71\x42\x71': function _0x4a49aa(_0x23f49e, _0x50facc) {
            return _0x23f49e != _0x50facc;
        },
        '\x59\x6d\x4c': function _0x78fab3(_0x2a63eb, _0x93d66a, _0x360088, _0x56e408, _0xec1ff1, _0xf93ad9, _0x4a2ee7, _0x547563, _0x2976fa, _0x22cfad) {
            return _0x2a63eb(_0x93d66a, _0x360088, _0x56e408, _0xec1ff1, _0xf93ad9, _0x4a2ee7, _0x547563, _0x2976fa, _0x22cfad);
        },
        '\x6f\x56\x47': function _0x4bb531(_0x3a3c86, _0x3a8e1f) {
            return _0x3a3c86 * _0x3a8e1f;
        },
        '\x41\x6c\x47': function _0x1275e2(_0x248bd8) {
            return _0x248bd8();
        },
        '\x5a\x53\x70': function _0x2d7276(_0x1daa7d, _0xd106be) {
            return _0x1daa7d - _0xd106be;
        },
        '\x68\x51\x43': function _0x960681(_0x4309f4, _0x505ce9) {
            return _0x4309f4 * _0x505ce9;
        },
        '\x68\x6e\x4d': function _0x2d01c3(_0x2bcdf4) {
            return _0x2bcdf4();
        },
        '\x54\x52\x49': function _0x2d75e2(_0x197b56) {
            return _0x197b56();
        },
        '\x46\x71\x56': function _0x255c54(_0x829ea2, _0x3a0f42, _0x156118, _0x7cb1dc, _0x2982fa, _0x2c0766, _0x2230a8, _0x19795b, _0x8ce66e, _0x1820fa) {
            return _0x829ea2(_0x3a0f42, _0x156118, _0x7cb1dc, _0x2982fa, _0x2c0766, _0x2230a8, _0x19795b, _0x8ce66e, _0x1820fa);
        },
        '\x74\x46\x56': function _0x2a7645(_0x5c3587, _0x4530d1) {
            return _0x5c3587 * _0x4530d1;
        },
        '\x67\x53\x57': function _0x576c7f(_0x2e3dfe, _0x5eab37) {
            return _0x2e3dfe * _0x5eab37;
        },
        '\x64\x64\x4d': function _0xbf26c3(_0x1aac56, _0x3eac2a, _0x4efb85, _0x44ebb0, _0xe6b5be, _0x7858d9, _0xabbc5b, _0x3c071d, _0x25d857, _0x498aa9, _0x4725c4, _0x46bca4) {
            return _0x1aac56(_0x3eac2a, _0x4efb85, _0x44ebb0, _0xe6b5be, _0x7858d9, _0xabbc5b, _0x3c071d, _0x25d857, _0x498aa9, _0x4725c4, _0x46bca4);
        },
        '\x45\x4e\x70': function _0x523e49(_0x2aa4db, _0x5689a1, _0x14634a, _0x4c5351, _0x3e9c44, _0xab72fe, _0x56bb0e, _0x1d659e, _0xeecaa0, _0x305d3b) {
            return _0x2aa4db(_0x5689a1, _0x14634a, _0x4c5351, _0x3e9c44, _0xab72fe, _0x56bb0e, _0x1d659e, _0xeecaa0, _0x305d3b);
        },
        '\x62\x45\x4c': function _0x5e2db3(_0x3055b1) {
            return _0x3055b1();
        },
        '\x72\x55\x65': function _0x179f37(_0x501ffd, _0x5a79b7) {
            return _0x501ffd * _0x5a79b7;
        },
        '\x6d\x4f\x58': function _0x3508ce(_0x43e336, _0x135c92, _0x40d012, _0x168635, _0x4b927b, _0x5c8182, _0x426a79, _0x2d4af3, _0x24cbc5, _0x5ce4f) {
            return _0x43e336(_0x135c92, _0x40d012, _0x168635, _0x4b927b, _0x5c8182, _0x426a79, _0x2d4af3, _0x24cbc5, _0x5ce4f);
        },
        '\x49\x7a\x74': function _0x5a04c6(_0x1a08e5, _0x4001f5) {
            return _0x1a08e5 * _0x4001f5;
        },
        '\x55\x48\x79': function _0x394bd6(_0xed10bb) {
            return _0xed10bb();
        },
        '\x73\x75\x4d': function _0x134558(_0x55f71a, _0x330bf1) {
            return _0x55f71a * _0x330bf1;
        },
        '\x4b\x5a\x42': function _0x236d03(_0x576a85, _0x3cb23a) {
            return _0x576a85 * _0x3cb23a;
        },
        '\x49\x79\x70': function _0x355154(_0x206c37) {
            return _0x206c37();
        },
        '\x71\x55\x61': function _0xb078dd(_0x77b260, _0x5f10e2) {
            return _0x77b260 * _0x5f10e2;
        },
        '\x74\x42\x5a': function _0x286f3b(_0x5e09df) {
            return _0x5e09df();
        }
    };
    ctx[_0x4499('0x9')](new java[_0x4499('0xa')][_0x4499('0xb')]({
        '\x72\x75\x6e': function () {
            var _0x1a42b4 = {
                '\x72\x48\x41': function _0x235576(_0x335daa, _0x120fe1) {
                    return _0xad8f53[_0x4499('0xc')](_0x335daa, _0x120fe1);
                },
                '\x6f\x77\x79': function _0x3ff376(_0x529616, _0x2c92ef) {
                    return _0xad8f53[_0x4499('0xd')](_0x529616, _0x2c92ef);
                }
            };
            try {
                var _0x50dd5b = _0x4499('0xe')[_0x4499('0xf')]('\x7c'), _0x10871c = 0x0;
                while (!![]) {
                    switch (_0x50dd5b[_0x10871c++]) {
                    case '0':
                        t2 = _0xad8f53[_0x4499('0x10')](NewText, _0x4499('0x11'), 'CC', 0xf, _0x4499('0x12'));
                        continue;
                    case '1':
                        n4[_0x4499('0x13')](n5);
                        continue;
                    case '2':
                        n2[_0x4499('0x13')](n3);
                        continue;
                    case '3':
                        ;
                        continue;
                    case '4':
                        if (_0xad8f53[_0x4499('0x14')](nc1, null)) {
                            nc1[_0x4499('0x15')]();
                        }
                        continue;
                    case '5':
                        n5 = _0xad8f53[_0x4499('0x16')](NewView, 'LL', _0xad8f53[_0x4499('0x17')](_0xad8f53[_0x4499('0x18')](W), 0.619), _0xad8f53[_0x4499('0x19')](_0xad8f53[_0x4499('0x17')](_0xad8f53[_0x4499('0x18')](H), 0.1), _0xad8f53[_0x4499('0x17')](_0xad8f53[_0x4499('0x18')](W), 0.01)), 'CC', 0x1, 0x1, [
                            null,
                            _0x4499('0x1a')
                        ], 0xf, function (_0x10a25b) {
                            if (_0x1a42b4[_0x4499('0x1b')](gb2, !![])) {
                                nc1[_0x4499('0x15')]();
                                _0x1a42b4[_0x4499('0x1c')](jslog, jst2);
                            } else {
                                _0x1a42b4[_0x4499('0x1c')](print, _0x4499('0x1d'));
                            }
                            ;
                        });
                        continue;
                    case '6':
                        t1 = _0xad8f53[_0x4499('0x10')](NewText, jst6, 'LC', 0xf, _0x4499('0x12'));
                        continue;
                    case '7':
                        n2 = _0xad8f53[_0x4499('0x16')](NewView, 'LL', _0xad8f53[_0x4499('0x1e')](_0xad8f53[_0x4499('0x1f')](W), 0.613), _0xad8f53[_0x4499('0x1e')](_0xad8f53[_0x4499('0x20')](H), 0.65), 'CB', 0x1, 0x0, _0x4499('0x21'), null, null);
                        continue;
                    case '8':
                        n0 = _0xad8f53[_0x4499('0x22')](NewView, 'LL', _0xad8f53[_0x4499('0x23')](_0xad8f53[_0x4499('0x20')](W), 0.629), _0xad8f53[_0x4499('0x24')](_0xad8f53[_0x4499('0x20')](H), 0.75), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    case '9':
                        nc1 = _0xad8f53[_0x4499('0x25')](NewCDV, 0x0, _0x4499('0x26'), 0x0, n0, -0x1, -0x1, ![], !![], 'CC', 0x0, 0x0);
                        continue;
                    case '10':
                        n1[_0x4499('0x13')](n2);
                        continue;
                    case '11':
                        n3[_0x4499('0x13')](t1);
                        continue;
                    case '12':
                        n0[_0x4499('0x13')](n1);
                        continue;
                    case '13':
                        n1 = _0xad8f53[_0x4499('0x27')](NewView, 'LL', _0xad8f53[_0x4499('0x24')](_0xad8f53[_0x4499('0x28')](W), 0.629), _0xad8f53[_0x4499('0x29')](_0xad8f53[_0x4499('0x28')](H), 0.75), 'CC', 0x1, 0x1, [
                            'LR',
                            _0x4499('0x2a'),
                            _0x4499('0x2b')
                        ], 0xf, null);
                        continue;
                    case '14':
                        n5[_0x4499('0x13')](t2);
                        continue;
                    case '15':
                        n3 = _0xad8f53[_0x4499('0x2c')](NewView, 'SV', _0xad8f53[_0x4499('0x2d')](_0xad8f53[_0x4499('0x2e')](W), 0.613), _0xad8f53[_0x4499('0x19')](_0xad8f53[_0x4499('0x2f')](_0xad8f53[_0x4499('0x2e')](H), 0.65), _0xad8f53[_0x4499('0x30')](_0xad8f53[_0x4499('0x31')](W), 0.008)), null, null, 0x1, [
                            null,
                            _0x4499('0x1a')
                        ], [
                            0xf,
                            0xf,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '16':
                        n4 = _0xad8f53[_0x4499('0x2c')](NewView, 'LL', _0xad8f53[_0x4499('0x30')](_0xad8f53[_0x4499('0x31')](W), 0.629), _0xad8f53[_0x4499('0x32')](_0xad8f53[_0x4499('0x33')](H), 0.1), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    case '17':
                        n1[_0x4499('0x13')](n4);
                        continue;
                    }
                    break;
                }
            } catch (_0x4ed64b) {
                _0xad8f53[_0x4499('0xd')](print, _0x4ed64b);
            }
        }
    }));
    ctx[_0x4499('0x9')](new java[_0x4499('0xa')][_0x4499('0xb')]({
        '\x72\x75\x6e': function () {
            new android['os'][_0x4499('0x34')]()[_0x4499('0x35')](new java[_0x4499('0xa')][_0x4499('0xb')]({
                '\x72\x75\x6e': function () {
                    gb2 = !![];
                }
            }), 0x2710);
        }
    }));
}
;


var _0x4656 = [
    'YWRkVmlldw\x3d\x3d',
    'RnZD',
    'IzAwMDAwMA\x3d\x3d',
    'VWxq',
    'UktR',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'QUFK',
    'VWJK',
    'b3Nk',
    'NXwzfDl8MTR8MTV8MTN8MTJ8MTZ8MnwwfDE3fDEwfDExfDF8NHw2fDh8MTh8Nw\x3d\x3d',
    'UURT',
    '54mp5ZOB6ZmE6a2U',
    'VklB',
    'UlZr',
    'RW50aXR5IOWunuS9k\x2baOp\x2bWItg\x3d\x3d',
    '6I2v5rC05pWI5p6c',
    'cUlw',
    'ZGlzbWlzcw\x3d\x3d',
    'VlVW',
    '5LiN5Lya55So77yf5p\x2bl55yL5biu5YqpID4\x3d',
    'bUV2',
    'Z3dP',
    'dktS',
    'Qmdh',
    'a1Bo',
    '54mp5ZOB5re75Yqg',
    'V2xa',
    'dEtP',
    'ck1F',
    'bmhh',
    'c216',
    'I2I0ZWJlYmVi',
    'Ukht',
    'UkdB',
    'VURO',
    'WWty',
    'YkRR',
    'bUZ3',
    'Rkxy',
    'U2VX',
    'T1VY',
    'b0Nl',
    'UXls',
    'MXwyfDE2fDd8MTN8NHwxOXw4fDE0fDZ8MTB8OXwzfDExfDE3fDB8NXwxNXwxMnwxOA\x3d\x3d',
    'b01L',
    '6Ieq556E55m95ZCN5Y2VKOW8gOWPkeS4rSk\x3d',
    'eW1I',
    'cVdE',
    '546p5a625Lyg6YCB',
    'emZH',
    'ZmxJ',
    'a3BF',
    'WEtV',
    'S2xy',
    'VHpK',
    '6Lef6Liq6Ieq556EUHJvKOW8gOWPkeS4rSk\x3d',
    'bnJB',
    'ZlRE',
    '6Jma56m65Zue5by5',
    'NHwxfDB8M3wy',
    'Z1hY',
    'WW5h',
    'QXVk',
    'c01s',
    'ZGNr',
    'a3ZT',
    'Sm9B',
    'WGJp',
    'QmVoYXZpb3Ig546p5a626KGM5Li6',
    '6Ieq6LWw6Jma56m6KOW8gOWPkeS4rSk\x3d',
    'Z0lr',
    'aVJU',
    'WXZa',
    'RmJD',
    'SmNO',
    'NXwyfDExfDd8MTd8NHwxNnwxfDE1fDZ8OXw4fDEyfDEwfDN8MTN8MHwxNA\x3d\x3d',
    'eEpi',
    'UEti',
    'a1p6',
    'eVpx',
    'RVlx',
    'emRX',
    'dUVh',
    'cnpJ',
    'ekl4',
    'RXRF',
    'TWl457KS5a2Q',
    'MXwyfDR8MHwz',
    'WHhy',
    'cVNn',
    'c05K',
    'eE1D',
    'Z3Vs',
    'dHZV',
    'Q2hV',
    '55Sf54mp5pi\x2b6KGA',
    'M3wwfDR8Mnwx',
    'RUdm',
    'Yll5',
    'Y0pJ',
    '6ISa5pys5a\x2b85YWl',
    'Unlo',
    'dm5C',
    'RnVuY3Rpb24g5Yqf6IO95YiX6KGo',
    'Z2VV',
    'TXJG',
    'bHVj',
    'RFBz',
    'W\x2bW3suWFs\x2bmXrV0\x3d',
    'NnwwfDF8Mnw0fDN8OHw3fDU\x3d',
    'c3BsaXQ\x3d',
    'SEFG',
    'a2JE',
    'TXJR',
    'c09h',
    'I2I0ZjdmN2Y3',
    'RmZY',
    'W\x2bW3suW8gOWQr10\x3d',
    'VFlQ',
    'ZUpG',
    'ZFpX',
    'I2I0ZWZmZmQ4',
    'I2I0ZDhmZmY5',
    'I2I0ZjBmMGYw'
];
(function (_0x1fa2cf, _0x143b83) {
    var _0x43c859 = function (_0x186630) {
        while (--_0x186630) {
            _0x1fa2cf['\x70\x75\x73\x68'](_0x1fa2cf['\x73\x68\x69\x66\x74']());
        }
    };
    _0x43c859(++_0x143b83);
}(_0x4656, 0xec));
var _0x6465 = function (_0x564bc5, _0x3ec56e) {
    _0x564bc5 = _0x564bc5 - 0x0;
    var _0x5416a7 = _0x4656[_0x564bc5];
    if (_0x6465['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x117842 = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x277567 = _0x117842();
            var _0x4aebfc = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x277567['\x61\x74\x6f\x62'] || (_0x277567['\x61\x74\x6f\x62'] = function (_0x3783b8) {
                var _0x51e2fd = String(_0x3783b8)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x39bd2c = 0x0, _0x40c58d, _0x59d715, _0x1570d3 = 0x0, _0x51f0ea = ''; _0x59d715 = _0x51e2fd['\x63\x68\x61\x72\x41\x74'](_0x1570d3++); ~_0x59d715 && (_0x40c58d = _0x39bd2c % 0x4 ? _0x40c58d * 0x40 + _0x59d715 : _0x59d715, _0x39bd2c++ % 0x4) ? _0x51f0ea += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x40c58d >> (-0x2 * _0x39bd2c & 0x6)) : 0x0) {
                    _0x59d715 = _0x4aebfc['\x69\x6e\x64\x65\x78\x4f\x66'](_0x59d715);
                }
                return _0x51f0ea;
            });
        }());
        _0x6465['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0xd885d9) {
            var _0x5e5d9f = atob(_0xd885d9);
            var _0x4c3d35 = [];
            for (var _0x3f83a9 = 0x0, _0x246e48 = _0x5e5d9f['\x6c\x65\x6e\x67\x74\x68']; _0x3f83a9 < _0x246e48; _0x3f83a9++) {
                _0x4c3d35 += '\x25' + ('\x30\x30' + _0x5e5d9f['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x3f83a9)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x4c3d35);
        };
        _0x6465['\x64\x61\x74\x61'] = {};
        _0x6465['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x6465['\x64\x61\x74\x61'][_0x564bc5] === undefined) {
        _0x5416a7 = _0x6465['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x5416a7);
        _0x6465['\x64\x61\x74\x61'][_0x564bc5] = _0x5416a7;
    } else {
        _0x5416a7 = _0x6465['\x64\x61\x74\x61'][_0x564bc5];
    }
    return _0x5416a7;
};
var ac1;
var ac2;
var fun1 = [];
var fun2 = [
    _0x6465('0x0'),
    _0x6465('0x0'),
    _0x6465('0x0')
];
var fun3 = [
    _0x6465('0x0'),
    _0x6465('0x0')
];
function addoption(_0x12c84d, _0x3bf6df, _0x294e18) {
    var _0x19368d = {
        '\x48\x41\x46': function _0x1b8cca(_0x136539, _0x21101f, _0x1a5a20, _0x10b897, _0x398d84, _0x404d92, _0x2f5c5d, _0x481f25, _0x2a0c4f, _0x43a64c) {
            return _0x136539(_0x21101f, _0x1a5a20, _0x10b897, _0x398d84, _0x404d92, _0x2f5c5d, _0x481f25, _0x2a0c4f, _0x43a64c);
        },
        '\x6b\x62\x44': function _0x2fed54(_0xbe932c, _0x1ff517) {
            return _0xbe932c * _0x1ff517;
        },
        '\x4d\x72\x51': function _0x2abb38(_0x59bb99) {
            return _0x59bb99();
        },
        '\x73\x4f\x61': function _0x43934c(_0x33c9ac, _0x495326) {
            return _0x33c9ac * _0x495326;
        },
        '\x46\x66\x58': function _0x233bce(_0x5a1d9a, _0x2c8096) {
            return _0x5a1d9a == _0x2c8096;
        },
        '\x54\x59\x50': function _0x3bc0f4(_0x4f9dad, _0x45cacb, _0xc932f2, _0x476834, _0x51726c, _0x270f02, _0x5a7d78, _0x93a556, _0x5cad6c, _0xafce4d) {
            return _0x4f9dad(_0x45cacb, _0xc932f2, _0x476834, _0x51726c, _0x270f02, _0x5a7d78, _0x93a556, _0x5cad6c, _0xafce4d);
        },
        '\x65\x4a\x46': function _0x370623(_0x347657, _0x395b00) {
            return _0x347657 * _0x395b00;
        },
        '\x64\x5a\x57': function _0xec7f2f(_0x59f051) {
            return _0x59f051();
        },
        '\x46\x76\x43': function _0x4f9b08(_0x459ba0, _0x5df22c, _0x34e23d, _0x2458a9, _0x5643bb) {
            return _0x459ba0(_0x5df22c, _0x34e23d, _0x2458a9, _0x5643bb);
        },
        '\x55\x6c\x6a': function _0x25901e(_0x4c2d1d, _0x254bb5, _0x1ba526, _0x3f4cc6, _0x4d69f6, _0x4d177f, _0x411933, _0x1b8b65, _0x4e124f, _0x49831d) {
            return _0x4c2d1d(_0x254bb5, _0x1ba526, _0x3f4cc6, _0x4d69f6, _0x4d177f, _0x411933, _0x1b8b65, _0x4e124f, _0x49831d);
        },
        '\x52\x4b\x51': function _0x209559(_0x130454, _0x680aac) {
            return _0x130454 * _0x680aac;
        }
    };
    var _0x595a77 = _0x6465('0x1')[_0x6465('0x2')]('\x7c'), _0x264f4b = 0x0;
    while (!![]) {
        switch (_0x595a77[_0x264f4b++]) {
        case '0':
            avn1 = _0x19368d[_0x6465('0x3')](NewView, 'LL', _0x19368d[_0x6465('0x4')](_0x19368d[_0x6465('0x5')](W), 0.3), _0x19368d[_0x6465('0x6')](_0x19368d[_0x6465('0x5')](H), 0.02), 'CC', 0x1, 0x1, [
                null,
                _0x6465('0x7')
            ], 0x0, null);
            continue;
        case '1':
            if (_0x19368d[_0x6465('0x8')](_0x294e18, _0x6465('0x9'))) {
                avn2 = _0x19368d[_0x6465('0xa')](NewView, 'LL', _0x19368d[_0x6465('0xb')](_0x19368d[_0x6465('0xc')](W), 0.3), _0x19368d[_0x6465('0xb')](_0x19368d[_0x6465('0xc')](H), 0.08), 'CC', 0x1, 0x1, [
                    'RT',
                    _0x6465('0xd'),
                    _0x6465('0xe')
                ], 0xa, _0x3bf6df);
            } else {
                avn2 = _0x19368d[_0x6465('0xa')](NewView, 'LL', _0x19368d[_0x6465('0xb')](_0x19368d[_0x6465('0xc')](W), 0.3), _0x19368d[_0x6465('0xb')](_0x19368d[_0x6465('0xc')](H), 0.08), 'CC', 0x1, 0x0, _0x6465('0xf'), 0xa, _0x3bf6df);
            }
            continue;
        case '2':
            ;
            continue;
        case '3':
            avn0[_0x6465('0x10')](avn1);
            continue;
        case '4':
            avn3 = _0x19368d[_0x6465('0x11')](NewText, _0x12c84d, 'CC', 0xd, _0x6465('0x12'));
            continue;
        case '5':
            return avn0;
            continue;
        case '6':
            avn0 = _0x19368d[_0x6465('0x13')](NewView, 'LL', _0x19368d[_0x6465('0xb')](_0x19368d[_0x6465('0xc')](W), 0.3), _0x19368d[_0x6465('0x14')](_0x19368d[_0x6465('0xc')](H), 0.1), 'CC', 0x1, 0x2, null, null, null);
            continue;
        case '7':
            avn2[_0x6465('0x10')](avn3);
            continue;
        case '8':
            avn0[_0x6465('0x10')](avn2);
            continue;
        }
        break;
    }
}
;
function B1() {
    var _0x67d2c8 = {
        '\x71\x49\x70': function _0x4d3c97(_0x44b55b) {
            return _0x44b55b();
        },
        '\x41\x41\x4a': function _0x5ad1f5(_0x3ae5d9) {
            return _0x3ae5d9();
        },
        '\x55\x62\x4a': function _0x56b532(_0x85c660, _0x550f50) {
            return _0x85c660 != _0x550f50;
        },
        '\x6f\x73\x64': function _0x366018(_0x31eece, _0xedd724) {
            return _0x31eece(_0xedd724);
        },
        '\x51\x44\x53': function _0x177d1b(_0x462d9b, _0x3a683c, _0x148d90) {
            return _0x462d9b(_0x3a683c, _0x148d90);
        },
        '\x52\x56\x6b': function _0x1d23bb(_0x1e4fdf, _0x4b7f6e, _0x3f76c2, _0x14b248, _0xaa153a) {
            return _0x1e4fdf(_0x4b7f6e, _0x3f76c2, _0x14b248, _0xaa153a);
        },
        '\x56\x55\x56': function _0x22a466(_0x32372a, _0x43c1f0, _0x39485e) {
            return _0x32372a(_0x43c1f0, _0x39485e);
        },
        '\x76\x4b\x52': function _0x3bfa8b(_0x387056, _0x5588f6, _0x58e1f5, _0x2aafcb, _0x31526a) {
            return _0x387056(_0x5588f6, _0x58e1f5, _0x2aafcb, _0x31526a);
        },
        '\x42\x67\x61': function _0x1264dd(_0x1a762c, _0x1182aa) {
            return _0x1a762c != _0x1182aa;
        },
        '\x6b\x50\x68': function _0xe0c6eb(_0x2c865c, _0xd19875, _0x2e7cc1) {
            return _0x2c865c(_0xd19875, _0x2e7cc1);
        },
        '\x57\x6c\x5a': function _0x5229f8(_0x79b251, _0x151441, _0x1b7b33, _0x3b9be4, _0x3e6b63, _0xac435d, _0x2f8cf7, _0x56e2b9, _0x98a73a, _0x131c19) {
            return _0x79b251(_0x151441, _0x1b7b33, _0x3b9be4, _0x3e6b63, _0xac435d, _0x2f8cf7, _0x56e2b9, _0x98a73a, _0x131c19);
        },
        '\x74\x4b\x4f': function _0x50ed46(_0x48cb07, _0xc1479a) {
            return _0x48cb07 * _0xc1479a;
        },
        '\x72\x4d\x45': function _0x17b89e(_0xc09260) {
            return _0xc09260();
        },
        '\x6e\x68\x61': function _0x253d8e(_0x360083, _0x5ab8fc) {
            return _0x360083 * _0x5ab8fc;
        },
        '\x73\x6d\x7a': function _0x478aca(_0x2a6c7f) {
            return _0x2a6c7f();
        },
        '\x52\x48\x6d': function _0x3509be(_0x131a91) {
            return _0x131a91();
        },
        '\x52\x47\x41': function _0x4ad530(_0x52f4ee) {
            return _0x52f4ee();
        },
        '\x55\x44\x4e': function _0x186609(_0x40a3fc, _0x5641d7) {
            return _0x40a3fc * _0x5641d7;
        },
        '\x59\x6b\x72': function _0x544806(_0x1990a3) {
            return _0x1990a3();
        },
        '\x62\x44\x51': function _0x3d6535(_0x446bab, _0x3da508) {
            return _0x446bab * _0x3da508;
        },
        '\x6d\x46\x77': function _0x1c734d(_0x31aae0) {
            return _0x31aae0();
        },
        '\x46\x4c\x72': function _0xd2ee99(_0xd3033, _0x530169, _0x25bd97, _0xd0e048, _0x4296ce, _0x210fc8, _0x103943, _0x446ce3, _0x2653f8, _0x74f56d, _0x31be4b, _0x331ee5) {
            return _0xd3033(_0x530169, _0x25bd97, _0xd0e048, _0x4296ce, _0x210fc8, _0x103943, _0x446ce3, _0x2653f8, _0x74f56d, _0x31be4b, _0x331ee5);
        },
        '\x53\x65\x57': function _0x50c607(_0x321577, _0x1235dc) {
            return _0x321577 * _0x1235dc;
        },
        '\x4f\x55\x58': function _0x46a4cb(_0x1216bf, _0x4587e6) {
            return _0x1216bf * _0x4587e6;
        },
        '\x6f\x43\x65': function _0x4a3c24(_0x41b211) {
            return _0x41b211();
        },
        '\x51\x79\x6c': function _0x308279(_0x44ea65, _0x24f980) {
            return _0x44ea65(_0x24f980);
        }
    };
    ctx[_0x6465('0x15')](new java[_0x6465('0x16')][_0x6465('0x17')]({
        '\x72\x75\x6e': function () {
            var _0x30d068 = {
                '\x56\x49\x41': function _0x2d0a8e(_0x854d61) {
                    return _0x67d2c8[_0x6465('0x18')](_0x854d61);
                },
                '\x6d\x45\x76': function _0x25bcca(_0x2bb1bc, _0x10e71a) {
                    return _0x67d2c8[_0x6465('0x19')](_0x2bb1bc, _0x10e71a);
                },
                '\x67\x77\x4f': function _0x4ff797(_0x53654e, _0x5af773) {
                    return _0x67d2c8[_0x6465('0x1a')](_0x53654e, _0x5af773);
                }
            };
            try {
                var _0x3b4321 = _0x6465('0x1b')[_0x6465('0x2')]('\x7c'), _0x2c126c = 0x0;
                while (!![]) {
                    switch (_0x3b4321[_0x2c126c++]) {
                    case '0':
                        av1[_0x6465('0x10')](av2);
                        continue;
                    case '1':
                        av2[_0x6465('0x10')](_0x67d2c8[_0x6465('0x1c')](addoption, _0x6465('0x1d'), function (_0x30ddcb) {
                            _0x30d068[_0x6465('0x1e')](MaxEnchanted);
                        }));
                        continue;
                    case '2':
                        cv1 = _0x67d2c8[_0x6465('0x1f')](NewText, _0x6465('0x20'), 'CC', 0xa, _0x6465('0x12'));
                        continue;
                    case '3':
                        ;
                        continue;
                    case '4':
                        av2[_0x6465('0x10')](_0x67d2c8[_0x6465('0x1c')](addoption, _0x6465('0x21'), function (_0x5b77db) {
                            _0x67d2c8[_0x6465('0x22')](EffectEditor);
                        }));
                        continue;
                    case '5':
                        if (_0x67d2c8[_0x6465('0x19')](ac2, null)) {
                            ac2[_0x6465('0x23')]();
                            ac2 = null;
                        }
                        continue;
                    case '6':
                        av2[_0x6465('0x10')](_0x67d2c8[_0x6465('0x24')](addoption, _0x6465('0x25'), function (_0x34f691) {
                            ac2[_0x6465('0x23')]();
                            if (_0x30d068[_0x6465('0x26')](ac1, null)) {
                                ac1[_0x6465('0x23')]();
                                ac1 = null;
                            }
                            ;
                            _0x30d068[_0x6465('0x27')](jslog, jst2);
                        }));
                        continue;
                    case '7':
                        _0x67d2c8[_0x6465('0x28')](UIPlumb, av1, -0x64, 0x0, 0x96);
                        continue;
                    case '8':
                        av2[_0x6465('0x10')](av4);
                        continue;
                    case '9':
                        if (_0x67d2c8[_0x6465('0x29')](ac1, null)) {
                            ac1[_0x6465('0x23')]();
                            ac1 = null;
                        }
                        continue;
                    case '10':
                        av3[_0x6465('0x10')](cv1);
                        continue;
                    case '11':
                        av2[_0x6465('0x10')](_0x67d2c8[_0x6465('0x2a')](addoption, _0x6465('0x2b'), function (_0x50a552) {
                            _0x67d2c8[_0x6465('0x22')](ItemEditor);
                        }));
                        continue;
                    case '12':
                        av3 = _0x67d2c8[_0x6465('0x2c')](NewView, 'LL', _0x67d2c8[_0x6465('0x2d')](_0x67d2c8[_0x6465('0x2e')](W), 0.3), _0x67d2c8[_0x6465('0x2f')](_0x67d2c8[_0x6465('0x30')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x31')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '13':
                        av2 = _0x67d2c8[_0x6465('0x2c')](NewView, 'LL', _0x67d2c8[_0x6465('0x2f')](_0x67d2c8[_0x6465('0x32')](W), 0.3), _0x67d2c8[_0x6465('0x2f')](_0x67d2c8[_0x6465('0x33')](H), 0.49), 'CT', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], 0xa, null);
                        continue;
                    case '14':
                        ;
                        continue;
                    case '15':
                        av1 = _0x67d2c8[_0x6465('0x2c')](NewView, 'SV', _0x67d2c8[_0x6465('0x2f')](_0x67d2c8[_0x6465('0x33')](W), 0.3), _0x67d2c8[_0x6465('0x2f')](_0x67d2c8[_0x6465('0x33')](H), 0.49), null, null, 0x2, null, null, null);
                        continue;
                    case '16':
                        av4 = _0x67d2c8[_0x6465('0x2c')](NewView, 'LL', _0x67d2c8[_0x6465('0x34')](_0x67d2c8[_0x6465('0x35')](W), 0.3), _0x67d2c8[_0x6465('0x36')](_0x67d2c8[_0x6465('0x37')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], [
                            0x0,
                            0x0,
                            0xa,
                            0xa
                        ], null);
                        continue;
                    case '17':
                        av2[_0x6465('0x10')](av3);
                        continue;
                    case '18':
                        ac2 = _0x67d2c8[_0x6465('0x38')](NewCDV, 0x2, null, 0x0, av1, _0x67d2c8[_0x6465('0x39')](_0x67d2c8[_0x6465('0x37')](W), 0.3), _0x67d2c8[_0x6465('0x3a')](_0x67d2c8[_0x6465('0x37')](H), 0.49), ![], !![], 'RT', _0x67d2c8[_0x6465('0x3a')](_0x67d2c8[_0x6465('0x3b')](W), 0.08), 0x0);
                        continue;
                    }
                    break;
                }
            } catch (_0x5687fc) {
                _0x67d2c8[_0x6465('0x3c')](print, _0x5687fc);
            }
        }
    }));
}
;
function B2() {
    var _0x1e2f7d = {
        '\x7a\x66\x47': function _0x5c2be6(_0x5b2c13) {
            return _0x5b2c13();
        },
        '\x6f\x4d\x4b': function _0x3a6e6c(_0x495fd0, _0xdd9a33, _0x5d3fad) {
            return _0x495fd0(_0xdd9a33, _0x5d3fad);
        },
        '\x79\x6d\x48': function _0x2c5d47(_0x55e42c, _0x2fed43) {
            return _0x55e42c != _0x2fed43;
        },
        '\x71\x57\x44': function _0x165189(_0xea46de, _0x460c6e, _0x1878a5) {
            return _0xea46de(_0x460c6e, _0x1878a5);
        },
        '\x66\x6c\x49': function _0x2ae094(_0xcff5d2, _0x25bf5b, _0x5c50da, _0x133d03, _0x5a458e, _0x39e54f, _0x43d510, _0x47a3f5, _0x3fb1c0, _0x418ef3) {
            return _0xcff5d2(_0x25bf5b, _0x5c50da, _0x133d03, _0x5a458e, _0x39e54f, _0x43d510, _0x47a3f5, _0x3fb1c0, _0x418ef3);
        },
        '\x6b\x70\x45': function _0x3e62f2(_0x458878, _0x131f02) {
            return _0x458878 * _0x131f02;
        },
        '\x58\x4b\x55': function _0x281fc9(_0xa694f1) {
            return _0xa694f1();
        },
        '\x4b\x6c\x72': function _0x375a30(_0x22ffb8, _0x362e79) {
            return _0x22ffb8 * _0x362e79;
        },
        '\x54\x7a\x4a': function _0x33111b(_0xde227d, _0xca2613, _0x4254ec) {
            return _0xde227d(_0xca2613, _0x4254ec);
        },
        '\x6e\x72\x41': function _0x19a085(_0x3a0604) {
            return _0x3a0604();
        },
        '\x66\x54\x44': function _0x565227(_0x15772a, _0x3fb466, _0x4d762c, _0x28b0f5) {
            return _0x15772a(_0x3fb466, _0x4d762c, _0x28b0f5);
        },
        '\x41\x75\x64': function _0x2267f8(_0x3e03bc, _0x363597, _0x4fe486, _0x2f1c3f, _0x18f7f4, _0x4409e5, _0x1ddfa7, _0x330b7e, _0x2719ea, _0x296698, _0x3b9e7e, _0x5283c4) {
            return _0x3e03bc(_0x363597, _0x4fe486, _0x2f1c3f, _0x18f7f4, _0x4409e5, _0x1ddfa7, _0x330b7e, _0x2719ea, _0x296698, _0x3b9e7e, _0x5283c4);
        },
        '\x73\x4d\x6c': function _0x485045(_0x4e32fa, _0x53f203) {
            return _0x4e32fa * _0x53f203;
        },
        '\x64\x63\x6b': function _0x155aa7(_0x4c2685, _0x412d38, _0x112bde, _0x4d55b8, _0x4c6692, _0x332239, _0x5c9675, _0x5c30da, _0x2aa7e7, _0x59fb84) {
            return _0x4c2685(_0x412d38, _0x112bde, _0x4d55b8, _0x4c6692, _0x332239, _0x5c9675, _0x5c30da, _0x2aa7e7, _0x59fb84);
        },
        '\x6b\x76\x53': function _0x5241fb(_0x5cba22) {
            return _0x5cba22();
        },
        '\x4a\x6f\x41': function _0x566f9e(_0x3347c0, _0x3cd01a) {
            return _0x3347c0 * _0x3cd01a;
        },
        '\x58\x62\x69': function _0xf8cd9a(_0x2341fb, _0x1ef8ef, _0x45ad52, _0x59d720, _0x278294) {
            return _0x2341fb(_0x1ef8ef, _0x45ad52, _0x59d720, _0x278294);
        },
        '\x67\x49\x6b': function _0x29b871(_0x175262, _0x562b32) {
            return _0x175262 * _0x562b32;
        },
        '\x69\x52\x54': function _0x522bd3(_0x59fda8) {
            return _0x59fda8();
        },
        '\x59\x76\x5a': function _0x104676(_0x123d45, _0x3a1c3a) {
            return _0x123d45 * _0x3a1c3a;
        },
        '\x46\x62\x43': function _0x3c3f46(_0x52398a) {
            return _0x52398a();
        },
        '\x4a\x63\x4e': function _0x16ff81(_0x7f2e0e, _0x240d2f) {
            return _0x7f2e0e(_0x240d2f);
        }
    };
    ctx[_0x6465('0x15')](new java[_0x6465('0x16')][_0x6465('0x17')]({
        '\x72\x75\x6e': function () {
            try {
                var _0x53d943 = _0x6465('0x3d')[_0x6465('0x2')]('\x7c'), _0x39a80d = 0x0;
                while (!![]) {
                    switch (_0x53d943[_0x39a80d++]) {
                    case '0':
                        av2[_0x6465('0x10')](_0x1e2f7d[_0x6465('0x3e')](addoption, _0x6465('0x3f'), function (_0x8abe64) {
                        }));
                        continue;
                    case '1':
                        if (_0x1e2f7d[_0x6465('0x40')](ac2, null)) {
                            ac2[_0x6465('0x23')]();
                            ac2 = null;
                        }
                        continue;
                    case '2':
                        ;
                        continue;
                    case '3':
                        av2[_0x6465('0x10')](_0x1e2f7d[_0x6465('0x41')](addoption, _0x6465('0x42'), function (_0x4639b9) {
                            _0x1e2f7d[_0x6465('0x43')](PlayerPosition);
                        }));
                        continue;
                    case '4':
                        av2 = _0x1e2f7d[_0x6465('0x44')](NewView, 'LL', _0x1e2f7d[_0x6465('0x45')](_0x1e2f7d[_0x6465('0x46')](W), 0.3), _0x1e2f7d[_0x6465('0x47')](_0x1e2f7d[_0x6465('0x46')](H), 0.49), 'CT', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], 0xa, null);
                        continue;
                    case '5':
                        av2[_0x6465('0x10')](_0x1e2f7d[_0x6465('0x48')](addoption, _0x6465('0x49'), function (_0x1478c4) {
                        }));
                        continue;
                    case '6':
                        av1[_0x6465('0x10')](av2);
                        continue;
                    case '7':
                        ;
                        continue;
                    case '8':
                        av4 = _0x1e2f7d[_0x6465('0x44')](NewView, 'LL', _0x1e2f7d[_0x6465('0x47')](_0x1e2f7d[_0x6465('0x4a')](W), 0.3), _0x1e2f7d[_0x6465('0x47')](_0x1e2f7d[_0x6465('0x4a')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], [
                            0x0,
                            0x0,
                            0xa,
                            0xa
                        ], null);
                        continue;
                    case '9':
                        av3[_0x6465('0x10')](cv1);
                        continue;
                    case '10':
                        av2[_0x6465('0x10')](av3);
                        continue;
                    case '11':
                        av2[_0x6465('0x10')](_0x1e2f7d[_0x6465('0x4b')](addoption, _0x6465('0x4c'), function (_0x520b6e) {
                            var _0x12aaa8 = {
                                '\x67\x58\x58': function _0x355649(_0x1fe9b2, _0x50aab0) {
                                    return _0x1fe9b2 != _0x50aab0;
                                },
                                '\x59\x6e\x61': function _0x15eb9d(_0x51ab5b, _0x119580) {
                                    return _0x51ab5b == _0x119580;
                                }
                            };
                            var _0x413590 = _0x6465('0x4d')[_0x6465('0x2')]('\x7c'), _0x1cd6a7 = 0x0;
                            while (!![]) {
                                switch (_0x413590[_0x1cd6a7++]) {
                                case '0':
                                    ;
                                    continue;
                                case '1':
                                    if (_0x12aaa8[_0x6465('0x4e')](ac1, null)) {
                                        ac1[_0x6465('0x23')]();
                                        ac1 = null;
                                    }
                                    continue;
                                case '2':
                                    ;
                                    continue;
                                case '3':
                                    if (_0x12aaa8[_0x6465('0x4f')](fun2[0x0], _0x6465('0x0'))) {
                                        fun2[0x0] = _0x6465('0x9');
                                    } else {
                                        fun2[0x0] = _0x6465('0x0');
                                    }
                                    continue;
                                case '4':
                                    ac2[_0x6465('0x23')]();
                                    continue;
                                }
                                break;
                            }
                        }, fun2[0x0]));
                        continue;
                    case '12':
                        ac2 = _0x1e2f7d[_0x6465('0x50')](NewCDV, 0x2, null, 0x0, av1, _0x1e2f7d[_0x6465('0x51')](_0x1e2f7d[_0x6465('0x4a')](W), 0.3), _0x1e2f7d[_0x6465('0x51')](_0x1e2f7d[_0x6465('0x4a')](H), 0.49), ![], !![], 'RT', _0x1e2f7d[_0x6465('0x51')](_0x1e2f7d[_0x6465('0x4a')](W), 0.08), 0x0);
                        continue;
                    case '13':
                        av1 = _0x1e2f7d[_0x6465('0x52')](NewView, 'SV', _0x1e2f7d[_0x6465('0x51')](_0x1e2f7d[_0x6465('0x53')](W), 0.3), _0x1e2f7d[_0x6465('0x54')](_0x1e2f7d[_0x6465('0x53')](H), 0.49), null, null, 0x2, null, null, null);
                        continue;
                    case '14':
                        cv1 = _0x1e2f7d[_0x6465('0x55')](NewText, _0x6465('0x56'), 'CC', 0xa, _0x6465('0x12'));
                        continue;
                    case '15':
                        av2[_0x6465('0x10')](av4);
                        continue;
                    case '16':
                        if (_0x1e2f7d[_0x6465('0x40')](ac1, null)) {
                            ac1[_0x6465('0x23')]();
                            ac1 = null;
                        }
                        continue;
                    case '17':
                        av2[_0x6465('0x10')](_0x1e2f7d[_0x6465('0x48')](addoption, _0x6465('0x57'), function (_0x369826) {
                        }));
                        continue;
                    case '18':
                        _0x1e2f7d[_0x6465('0x55')](UIPlumb, av1, -0x64, 0x0, 0x96);
                        continue;
                    case '19':
                        av3 = _0x1e2f7d[_0x6465('0x52')](NewView, 'LL', _0x1e2f7d[_0x6465('0x58')](_0x1e2f7d[_0x6465('0x59')](W), 0.3), _0x1e2f7d[_0x6465('0x5a')](_0x1e2f7d[_0x6465('0x5b')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x31')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    }
                    break;
                }
            } catch (_0x18135d) {
                _0x1e2f7d[_0x6465('0x5c')](print, _0x18135d);
            }
        }
    }));
}
;
function B3() {
    var _0x7cf5b = {
        '\x6b\x5a\x7a': function _0x2d95d6(_0x59edd8) {
            return _0x59edd8();
        },
        '\x78\x4a\x62': function _0x3b0e90(_0x30ca05, _0x4f66fb, _0x6dc9f9, _0x1c5465, _0xdfde06, _0x48d0b9, _0x273f40, _0x38576e, _0x48c0f4, _0x5643ad, _0x40e41a, _0xcb289f) {
            return _0x30ca05(_0x4f66fb, _0x6dc9f9, _0x1c5465, _0xdfde06, _0x48d0b9, _0x273f40, _0x38576e, _0x48c0f4, _0x5643ad, _0x40e41a, _0xcb289f);
        },
        '\x50\x4b\x62': function _0x429b45(_0x576583, _0x3fba23) {
            return _0x576583 * _0x3fba23;
        },
        '\x79\x5a\x71': function _0xfa2dc8(_0x4ca7f8) {
            return _0x4ca7f8();
        },
        '\x45\x59\x71': function _0x52f2be(_0x57ec7b) {
            return _0x57ec7b();
        },
        '\x7a\x64\x57': function _0x3489c2(_0x4343c7, _0x285cb1, _0x55f5ce, _0x13e7c9, _0x1e6810, _0x1087be, _0x48ff4f, _0x3ea156, _0x5627e5, _0xad5124) {
            return _0x4343c7(_0x285cb1, _0x55f5ce, _0x13e7c9, _0x1e6810, _0x1087be, _0x48ff4f, _0x3ea156, _0x5627e5, _0xad5124);
        },
        '\x75\x45\x61': function _0x35e445(_0x5c6ba3) {
            return _0x5c6ba3();
        },
        '\x72\x7a\x49': function _0x286d76(_0x196992, _0x158634) {
            return _0x196992 * _0x158634;
        },
        '\x7a\x49\x78': function _0xce4725(_0x49fc57) {
            return _0x49fc57();
        },
        '\x45\x74\x45': function _0x43b639(_0x3f1c74, _0x4e8690, _0x32a3dd, _0x30f921) {
            return _0x3f1c74(_0x4e8690, _0x32a3dd, _0x30f921);
        },
        '\x73\x4e\x4a': function _0x5f0c9c(_0x49f221, _0x23eb91) {
            return _0x49f221 * _0x23eb91;
        },
        '\x78\x4d\x43': function _0x5e5a67(_0x83b678) {
            return _0x83b678();
        },
        '\x67\x75\x6c': function _0x555016(_0x2de186) {
            return _0x2de186();
        },
        '\x74\x76\x55': function _0x2f1d2f(_0x179ddb, _0xdb646d) {
            return _0x179ddb != _0xdb646d;
        },
        '\x43\x68\x55': function _0x4b816d(_0x464ed6, _0x5b922a, _0x34c5f8, _0x2f6ac7) {
            return _0x464ed6(_0x5b922a, _0x34c5f8, _0x2f6ac7);
        },
        '\x63\x4a\x49': function _0x2c2e46(_0xfa5fcd, _0x4d9c91, _0x3aa56d) {
            return _0xfa5fcd(_0x4d9c91, _0x3aa56d);
        },
        '\x52\x79\x68': function _0x5a69b2(_0x261758, _0x48edba, _0x287a0e, _0x3e1546, _0x29c846) {
            return _0x261758(_0x48edba, _0x287a0e, _0x3e1546, _0x29c846);
        },
        '\x76\x6e\x42': function _0x274c17(_0x3861ee, _0x1993fb, _0x4c50b5, _0x39738c, _0x1e79d2) {
            return _0x3861ee(_0x1993fb, _0x4c50b5, _0x39738c, _0x1e79d2);
        },
        '\x67\x65\x55': function _0x52b3b8(_0x1275f0, _0x2c4aeb, _0x4617b3, _0xcfc43a, _0x3bd45e, _0x5af262, _0x33ea6a, _0x5dfdd9, _0x1ddb84, _0x477211) {
            return _0x1275f0(_0x2c4aeb, _0x4617b3, _0xcfc43a, _0x3bd45e, _0x5af262, _0x33ea6a, _0x5dfdd9, _0x1ddb84, _0x477211);
        },
        '\x4d\x72\x46': function _0x428974(_0x519d59) {
            return _0x519d59();
        },
        '\x6c\x75\x63': function _0x5aa502(_0x3afc67) {
            return _0x3afc67();
        },
        '\x44\x50\x73': function _0xd946d8(_0x3bd445, _0x480148) {
            return _0x3bd445(_0x480148);
        }
    };
    ctx[_0x6465('0x15')](new java[_0x6465('0x16')][_0x6465('0x17')]({
        '\x72\x75\x6e': function () {
            try {
                var _0x4a4768 = _0x6465('0x5d')[_0x6465('0x2')]('\x7c'), _0x221a6c = 0x0;
                while (!![]) {
                    switch (_0x4a4768[_0x221a6c++]) {
                    case '0':
                        ac2 = _0x7cf5b[_0x6465('0x5e')](NewCDV, 0x2, null, 0x0, av1, _0x7cf5b[_0x6465('0x5f')](_0x7cf5b[_0x6465('0x60')](W), 0.3), _0x7cf5b[_0x6465('0x5f')](_0x7cf5b[_0x6465('0x61')](H), 0.49), ![], !![], 'RT', _0x7cf5b[_0x6465('0x5f')](_0x7cf5b[_0x6465('0x62')](W), 0.08), 0x0);
                        continue;
                    case '1':
                        av4 = _0x7cf5b[_0x6465('0x63')](NewView, 'LL', _0x7cf5b[_0x6465('0x5f')](_0x7cf5b[_0x6465('0x64')](W), 0.3), _0x7cf5b[_0x6465('0x65')](_0x7cf5b[_0x6465('0x66')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], [
                            0x0,
                            0x0,
                            0xa,
                            0xa
                        ], null);
                        continue;
                    case '2':
                        ;
                        continue;
                    case '3':
                        av2[_0x6465('0x10')](_0x7cf5b[_0x6465('0x67')](addoption, _0x6465('0x68'), function (_0x1d4f78) {
                            var _0x52d50f = {
                                '\x58\x78\x72': function _0x2e8161(_0x12c75e, _0x13c9c4) {
                                    return _0x12c75e == _0x13c9c4;
                                },
                                '\x71\x53\x67': function _0x310650(_0xbc867e, _0x5c1df5) {
                                    return _0xbc867e != _0x5c1df5;
                                }
                            };
                            var _0x344943 = _0x6465('0x69')[_0x6465('0x2')]('\x7c'), _0x24883a = 0x0;
                            while (!![]) {
                                switch (_0x344943[_0x24883a++]) {
                                case '0':
                                    if (_0x52d50f[_0x6465('0x6a')](fun3[0x1], _0x6465('0x0'))) {
                                        fun3[0x1] = _0x6465('0x9');
                                    } else {
                                        fun3[0x1] = _0x6465('0x0');
                                    }
                                    continue;
                                case '1':
                                    ac2[_0x6465('0x23')]();
                                    continue;
                                case '2':
                                    if (_0x52d50f[_0x6465('0x6b')](ac1, null)) {
                                        ac1[_0x6465('0x23')]();
                                        ac1 = null;
                                    }
                                    continue;
                                case '3':
                                    ;
                                    continue;
                                case '4':
                                    ;
                                    continue;
                                }
                                break;
                            }
                        }, fun3[0x1]));
                        continue;
                    case '4':
                        av2 = _0x7cf5b[_0x6465('0x63')](NewView, 'LL', _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x6d')](W), 0.3), _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x6e')](H), 0.49), 'CT', 0x1, 0x1, [
                            null,
                            _0x6465('0x7')
                        ], 0xa, null);
                        continue;
                    case '5':
                        if (_0x7cf5b[_0x6465('0x6f')](ac2, null)) {
                            ac2[_0x6465('0x23')]();
                            ac2 = null;
                        }
                        continue;
                    case '6':
                        av1[_0x6465('0x10')](av2);
                        continue;
                    case '7':
                        ;
                        continue;
                    case '8':
                        av3[_0x6465('0x10')](cv1);
                        continue;
                    case '9':
                        av2[_0x6465('0x10')](av3);
                        continue;
                    case '10':
                        av2[_0x6465('0x10')](_0x7cf5b[_0x6465('0x70')](addoption, _0x6465('0x71'), function (_0x30a5a0) {
                            var _0x549b02 = {
                                '\x45\x47\x66': function _0x208503(_0x3be06e, _0x3f91a7) {
                                    return _0x3be06e != _0x3f91a7;
                                },
                                '\x62\x59\x79': function _0x1cefa7(_0x4b9a94, _0x5744db) {
                                    return _0x4b9a94 == _0x5744db;
                                }
                            };
                            var _0x321ea2 = _0x6465('0x72')[_0x6465('0x2')]('\x7c'), _0x33a6a7 = 0x0;
                            while (!![]) {
                                switch (_0x321ea2[_0x33a6a7++]) {
                                case '0':
                                    if (_0x549b02[_0x6465('0x73')](ac1, null)) {
                                        ac1[_0x6465('0x23')]();
                                        ac1 = null;
                                    }
                                    continue;
                                case '1':
                                    ;
                                    continue;
                                case '2':
                                    if (_0x549b02[_0x6465('0x74')](fun3[0x0], _0x6465('0x0'))) {
                                        fun3[0x0] = _0x6465('0x9');
                                    } else {
                                        fun3[0x0] = _0x6465('0x0');
                                    }
                                    continue;
                                case '3':
                                    ac2[_0x6465('0x23')]();
                                    continue;
                                case '4':
                                    ;
                                    continue;
                                }
                                break;
                            }
                        }, fun3[0x0]));
                        continue;
                    case '11':
                        if (_0x7cf5b[_0x6465('0x6f')](ac1, null)) {
                            ac1[_0x6465('0x23')]();
                            ac1 = null;
                        }
                        continue;
                    case '12':
                        av2[_0x6465('0x10')](_0x7cf5b[_0x6465('0x75')](addoption, _0x6465('0x76'), function (_0x29fd0c) {
                            _0x7cf5b[_0x6465('0x60')](JsImporter);
                        }));
                        continue;
                    case '13':
                        av2[_0x6465('0x10')](av4);
                        continue;
                    case '14':
                        _0x7cf5b[_0x6465('0x77')](UIPlumb, av1, -0x64, 0x0, 0x96);
                        continue;
                    case '15':
                        cv1 = _0x7cf5b[_0x6465('0x78')](NewText, _0x6465('0x79'), 'CC', 0xa, _0x6465('0x12'));
                        continue;
                    case '16':
                        av3 = _0x7cf5b[_0x6465('0x7a')](NewView, 'LL', _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x6e')](W), 0.3), _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x7b')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x6465('0x31')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '17':
                        av1 = _0x7cf5b[_0x6465('0x7a')](NewView, 'SV', _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x7c')](W), 0.3), _0x7cf5b[_0x6465('0x6c')](_0x7cf5b[_0x6465('0x7c')](H), 0.49), null, null, 0x2, null, null, null);
                        continue;
                    }
                    break;
                }
            } catch (_0x5e1584) {
                _0x7cf5b[_0x6465('0x7d')](print, _0x5e1584);
            }
        }
    }));
}
;

//----------------

var swi2=0;
function ItemEditor(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
	if(ac1!=null){
		ac1.dismiss();
		ac1=null;
	};
	if(swi2<3){
		swi2++;
		TipMes("点按添加1个，长按添加64个");
	};
	av1=NewView("SV",W()*0.3,H()*0.49,null,null,2,null,null,null);
		av2=NewView("LL",W()*0.3,H()*0.49,"CT",1,1,[null,"#b4f7f7f7"],10,null);
			av3=NewView("LL",W()*0.3,H()*0.05,"CC",1,1,[null,"#b4ebebeb"],[10,10,0,0],null);
			av4=NewView("LL",W()*0.3,H()*0.02,"CC",1,1,[null,"#b4f7f7f7"],[0,0,10,10],null);

avm0=NewView("LL",W()*0.3,H()*0.1,"CC",1,2,null,null,null);
		 avm1=NewView("LL",W()*0.3,H()*0.02,"CC",1,1,[null,"#b4f7f7f7"],0,null);
		_avm2=NewView("LL",W()*0.3,H()*0.08,"CC",0,0,"#b4f0f0f0",10,null);
			avm2=NewView("LL",W()*0.15,H()*0.08,"CC",1,0,"#b4f0f0f0",10,
				function(v){
					ctx.runOnUiThread(new java.lang.Runnable({run:function(){
				try{
					if(nc1!=null){
						nc1.dismiss();
					};
					n0=NewView("LL",W()*0.329,H()*0.85,"CC",1,2,null,null,null);
						n1=NewView("LL",W()*0.329,H()*0.85,"CC",1,1,["RT","#ffa7ffd8","#ffffd3f8"],15,null);
							n2=NewView("LL",W()*0.313,H()*0.75,"CB",1,0,"#11909090",null,null);
								n3=NewView("SV",W()*0.313,H()*0.75-W()*0.008,null,null,1,[null,"#80ffffff"],[15,15,0,0],null);
							n4=NewView("LL",W()*0.329,H()*0.1,"CC",1,2,null,null,null);
								n5=NewView("LL",W()*0.319,H()*0.1-W()*0.01,"CC",1,1,[null,"#80ffffff"],15,
									function(v){
										nc1.dismiss();
									}
								);
				var webv = new android.webkit.WebView(ctx);
				webv.loadUrl("http://mc.");
					t2=NewText("关闭","CC",15,"#000000");
							n3.addView(webv);
							n5.addView(t2);
					n0.addView(n1);
						n1.addView(n2);
							n2.addView(n3);
						n1.addView(n4);
							n4.addView(n5);
					nc1=NewCDV(0,"#64ffffff",0,n0,-1,-1,true,true,"CC",0,0);
					}catch(err){print(err)}
				}}));
				TipMes("正在打开网页，请稍候...");
			});
			avm2$=NewView("LL",W()*0.15,H()*0.08,"CC",1,0,"#b4ffdede",10,
			function(v){
				ac1.dismiss();
			}
		);

	avm3=NewText("查ID","CC",14,"#000000");
	avm4=NewText("关闭","CC",14,"#000000");
		avm0.addView(avm1);
		avm0.addView(_avm2);
			_avm2.addView(avm2);
			_avm2.addView(avm2$);
				avm2.addView(avm3);
				avm2$.addView(avm4);

avn0=NewView("LL",W()*0.3,H()*0.1,"CC",1,2,null,null,null);
		 avn1=NewView("LL",W()*0.3,H()*0.02,"CC",1,1,[null,"#b4f7f7f7"],0,null);
			avn2=NewView("LL",W()*0.3,H()*0.08,"CC",0,0,"#b4f0f0f0",10,null);
				avn11=NewView("LL",W()*0.1,H()*0.08,"CC",0,2,null,10,null);
				avn12=NewView("LL",W()*0.1,H()*0.08,"CC",0,2,null,10,null);
				avn13=NewView("LL",W()*0.1,H()*0.08,"CC",0,0,"#b4c7fff0",10,
			function(v){
					if(et1.getText()!="" && et2.getText()!=""){
						try{
							Entity.setCarriedItem(getPlayerEnt(),et1.getText(),1,et2.getText());
						}catch(e){TipMes("添加失败！")};
					};
				});
			avn13.setOnLongClickListener(new android.view.View.OnLongClickListener()
			{
			onLongClick:
			function(v){
				try{
					Entity.setCarriedItem(getPlayerEnt(),et1.getText(),64,et2.getText());
				}catch(e){TipMes("添加失败！")};
			return true;
			}});

	var et1=new android.widget.EditText(ctx);
		et1.setText("");
		et1.setHint("ID");
		et1.setTextSize(10);
	var et2=new android.widget.EditText(ctx);
		et2.setText("0");
		et2.setHint("SV");
		et2.setTextSize(10);

	avn3=NewText("添加","CC",14,"#000000");
		avn0.addView(avn1);
		avn0.addView(avn2);
			avn2.addView(avn11);
				avn11.addView(et1);
			avn2.addView(avn12);
				avn12.addView(et2);
			avn2.addView(avn13);
				avn13.addView(avn3);

	cv1=NewText("ItemEditor v1.1","CC",10,"#000000");

	av1.addView(av2);
		av2.addView(av3);
			av2.addView(avm0);
			av3.addView(cv1);
			av2.addView(avn0);
	
			av2.addView(Aadd("钻石剑" ,276 ,0));
			av2.addView(Aadd("附魔果" ,466 ,0));
			av2.addView(Aadd("隐身药" ,373 ,8))
			av2.addView(Aadd("伤害药" ,441 ,24));
			av2.addView(Aadd("炸药包" ,46 ,0));
			av2.addView(Aadd("打火石" ,259 ,0));
			av2.addView(Aadd("TNT蛋(闪退)" ,383 ,65));
			av2.addView(Aadd("凋零蛋" ,383 ,52));
			av2.addView(Aadd("末影蛋(不动)" ,383 ,53));
		
			av2.addView(av4);

ac1=NewCDV(2,null,0,av1,W()*0.3,H()*0.49,true,true,"RB",W()*0.08,0);
	UIPlumb(av1, 100 , 0 , 150);
}catch(err){print(err)};
}}));
};

function Aadd(name,id,ts){
	avm0=NewView("LL",W()*0.3,H()*0.1,"CC",1,2,null,null,null);
		 avm1=NewView("LL",W()*0.3,H()*0.02,"CC",1,1,[null,"#b4f7f7f7"],0,null);
			avm2=NewView("LL",W()*0.3,H()*0.08,"CC",1,0,"#b4f0f0f0",10,
				function(v){
					Entity.setCarriedItem(getPlayerEnt(),id,1,ts);
				});
			avm2.setOnLongClickListener(new android.view.View.OnLongClickListener()
			{
			onLongClick:
			function(v){
				Entity.setCarriedItem(getPlayerEnt(),id,64,ts);
			return true;
			}})
	avm3=NewText(name,"CC",14,"#000000");
		avm0.addView(avm1);
		avm0.addView(avm2);
			avm2.addView(avm3);
	return avm0;
};



function MaxEnchanted(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
	if(ac1!=null){
		ac1.dismiss();
		ac1=null;
	};
	av1=NewView("SV",W()*0.3,H()*0.49,null,null,2,null,null,null);
		av2=NewView("LL",W()*0.3,H()*0.49,"CT",1,1,[null,"#b4f7f7f7"],10,null);
			av3=NewView("LL",W()*0.3,H()*0.05,"CC",1,1,[null,"#b4ebebeb"],[10,10,0,0],null);
			av4=NewView("LL",W()*0.3,H()*0.02,"CC",1,1,[null,"#b4f7f7f7"],[0,0,10,10],null);

	cv1=NewText("MaxEnchanted v1.7","CC",10,"#000000");

	av1.addView(av2);
		av2.addView(av3);
			av3.addView(cv1);

av2.addView(addoption("锋利｜力量｜荆棘",
function(v){
	for(a=0;a<9;a++){
		Player.enchant(a, Enchantment.SHARPNESS, -98305);
		Player.enchant(a, Enchantment.POWER, -98305);
		Player.enchant(a, Enchantment.FLAME, -98305);
		Player.enchant(a, Enchantment.INFINITY, -98305);
		Player.enchant(a, Enchantment.PROTECTION, -98305);
		Player.enchant(a, Enchantment.THORNS, -98305);
		Player.enchant(a, Enchantment.UNBREAKING, -98305);
		Player.enchant(a, Enchantment.RESPIRATION, -98305);
		Player.enchant(a, Enchantment.AQUA_AFFINITY, -98305);
		Player.enchant(a, Enchantment.DEPTH_STRIDER, -98305);
		Player.enchant(a, Enchantment.FEATHER_FALLING, -98305);
	};
}
));
av2.addView(addoption("击退｜冲击｜保护",
function(v){
	for(a=0;a<9;a++){
		Player.enchant(a, Enchantment.KNOCKBACK, -98305);
		Player.enchant(a, Enchantment.FIRE_ASPECT, -98305);
		Player.enchant(a, Enchantment.PUNCH, -98305);
		Player.enchant(a, Enchantment.INFINITY, -98305);
		Player.enchant(a, Enchantment.PROTECTION, -98305);
		Player.enchant(a, Enchantment.UNBREAKING, -98305);
		Player.enchant(a, Enchantment.RESPIRATION, -98305);
		Player.enchant(a, Enchantment.AQUA_AFFINITY, -98305);
		Player.enchant(a, Enchantment.DEPTH_STRIDER, -98305);
		Player.enchant(a, Enchantment.FEATHER_FALLING, -98305);
	};
}
));
av2.addView(addoption("时运 + 效率",
function(v){
	for(a=0;a<9;a++){
		Player.enchant(a, Enchantment.EFFICIENCY, -98305);
		Player.enchant(a, Enchantment.FORTUNE, -98305);
		Player.enchant(a, Enchantment.UNBREAKING, -98305);
	};
}
));
av2.addView(addoption("海之眷顾",
function(v){
	for(a=0;a<9;a++){
		Player.enchant(a, Enchantment.UNBREAKING, -98305);
		Player.enchant(a, Enchantment.IMPALING, -98305);
		Player.enchant(a, Enchantment.LOYALTY, -98305);
		Player.enchant(a, Enchantment.LUCK_OF_THE_SEA, -98305);
		Player.enchant(a, Enchantment.LURE, -98305);
	};
}
));

			av2.addView(av4);
ac1=NewCDV(2,null,0,av1,W()*0.3,H()*0.49,false,true,"RB",W()*0.08,0);
	UIPlumb(av1, 100 , 0 , 150);
}catch(err){print(err)}
}}));
};



var _0xcda2 = [
    'WVh6',
    'aGdY',
    'UXlZ',
    'eFFE',
    'TnVy',
    'VnVR',
    'akRF',
    'QmZJ',
    'eXdy',
    'bWVM',
    'YkN4',
    'blNJ',
    'Y21u',
    'ckJB',
    'eHFX',
    'Y25a',
    'RFZG',
    'VklK',
    'UlNw',
    'Q0lG',
    'WmJl',
    'b2pp',
    'SnNJbXBvcnRlciB2MS4z',
    'YVlm',
    'bGlzdEZpbGVz',
    '5LuO5YaF6YOo5a2Y5YKo5Lit6YCJ5oupID4\x3d',
    'MXw3fDh8MHw1fDN8Mnw0fDY\x3d',
    'clht',
    'TGZk',
    'bGpk',
    'cFFE',
    'eGF4',
    'S0pH',
    'Q1NK',
    'ZlR6',
    'bk5a',
    'QkVV',
    'c0Jj',
    'ZkdN',
    'UE9H',
    'MHwxM3wyMHwxfDE1fDExfDEwfDh8N3wzfDE4fDE2fDEyfDV8NHwxNHwxOXw2fDE3fDJ8OQ\x3d\x3d',
    'RFF5',
    'ZkJC',
    'WXZV',
    'SUJ6',
    'TnJx',
    'WGdD',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'bHFp',
    'YVRC',
    'YUFo',
    '4oCU4oCUIOiHqueEtueugOe6pu\x2b9nOaegeiHtOS9k\x2bmqjCDigJTigJQK5a\x2b85YWl5LitLi4u',
    'I0ZGRkZGRg\x3d\x3d',
    'cGNV',
    'Smpa',
    'R0Fa',
    'IzVhOTY5Njk2',
    'IzEwOTY5Njk2',
    'UktJ',
    'eUJT',
    'aFpz',
    'cmVtb3ZlVmlldw\x3d\x3d',
    '5peg5rOV5a\x2b85YWl77yB6K\x2b35a\x2b85YWl5peg57yW6K\x2bR6ZSZ6K\x2bv55qESlPmlofku7YK5LiN5pSv5oyB772c56KO5qKm6ICFSnPvvZxNYXRyaXhIYWNr',
    'T0R4',
    '5a\x2b85YWl5aSx6LSl77yB',
    'WkVq',
    'dUxE',
    'RVlH',
    'VVRH',
    'Z3Vs',
    'RkhD',
    'Izk2ZmY2NDY0',
    'Izk2ZmZiNzY0',
    'ZXBL',
    'IzQxYjhiOGI4',
    'c3Ns',
    'TWlt',
    'bUZN',
    'Izk2ZDFkMWQx',
    'YndZ',
    'VG5o',
    'Zmxvb3I\x3d',
    'aFZS',
    'cmFuZG9t',
    'Q2pn',
    'Z1py',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'dmtT',
    'MTN8MTZ8MTJ8MTB8OXwxMXw3fDR8MTV8Mnw1fDF8OHwwfDE0fDN8Ng\x3d\x3d',
    'c3BsaXQ\x3d',
    'YWRkVmlldw\x3d\x3d',
    'YXR6',
    '6Lez6LeD5o\x2bQ5Y2HX2xpZ2h0',
    'YWRkRWZmZWN0',
    'WkFp',
    'RHFt',
    'Qkh4',
    'cWtE',
    'eVdZ',
    'Ykhv',
    'aFZs',
    '56e76Zmk5YWo6YOo5pWI5p6c',
    'cmVtb3ZlQWxsRWZmZWN0cw\x3d\x3d',
    'Snlh',
    'c09H',
    'RWZmZWN0RWRpdG9yIHYxLjI\x3d',
    'IzAwMDAwMA\x3d\x3d',
    'cUpL',
    'RFdP',
    'aGtt',
    'I2I0ZWJlYmVi',
    'd05V',
    'akdm',
    'I2I0ZjdmN2Y3',
    'RkVz',
    'akNE',
    'Y2xP',
    'ZGlzbWlzcw\x3d\x3d',
    'cUFi',
    'SlFJ',
    'UG9o',
    'ODB8MTE3fDY4fDY3fDEyfDMwfDg3fDEyMXwxMTZ8MTV8M3w5NXw5OHwyMnw1N3wxNHwxNDN8NjJ8NDJ8ODV8Nzd8OTB8NjF8MTM5fDh8MTI2fDE0MHw2NXw3MHwxMzJ8NzZ8MzN8NTZ8Nzh8MTQ4fDEzOHw2OXwxMzF8MTIyfDEyN3w3fDEzNHwxMDZ8NjR8OTF8MTI5fDIxfDEzfDI2fDl8MTEwfDQ1fDB8Nzl8MTE0fDZ8MTQ2fDEzN3w4MXw4M3w1MXwxNDJ8ODJ8MXwzMnwxMDR8MTI0fDg4fDE0NHwzNnwxMTJ8MTA4fDg5fDE4fDExOXwxMTh8MTMwfDV8MTIwfDQ3fDEyM3w3Mnw1Mnw0MHw5Nnw1OXw1NHw0NHwzOHwyOXwxMTN8NzN8NzF8MTF8MTExfDM5fDEwMXwyM3w2MHw0fDE0N3w1M3wyOHw5NHwxMjV8MTZ8NTh8OTJ8MTA3fDk3fDEwNXwxOXwxMDJ8NjN8OTN8NDZ8NDl8MTB8MTAzfDJ8ODR8MjB8MTM1fDI0fDQxfDc1fDEyOHwxMDB8NTV8MzR8MzF8Mjd8Mzd8MTQxfDg2fDk5fDM1fDE0NXw2NnwxMDl8MTM2fDE3fDI1fDUwfDExNXwxMzN8NzR8NDh8NDM\x3d',
    'U1dU',
    'UGxheWVyUG9zaXRpb24gdjEuMQ\x3d\x3d',
    'Z2V0TmFtZQ\x3d\x3d',
    'eXJD',
    'd1B4',
    'c2FM',
    'WUtI',
    'I2I0ZjBmMGYw',
    'dnBw',
    'c2V0UG9zaXRpb24\x3d',
    'Z2V0RW50aXR5',
    'Z2V0WA\x3d\x3d',
    'Z2V0WQ\x3d\x3d',
    'Z2V0Wg\x3d\x3d',
    'TG9H',
    'Tm1X',
    'ZllL',
    'akxn',
    'eUxl',
    'R1Zw',
    'RFJm',
    'S1JX',
    'eVBH',
    'WXpO',
    'U2VD',
    'bUZB',
    'V25t',
    'anhv',
    'RmZD',
    'ZWxt',
    'bm51',
    'd1Z4',
    'UkpI',
    'WFdO',
    'c2V0VGV4dA\x3d\x3d',
    'YkhN',
    'bHhP',
    'WmVH',
    'ekxM',
    'SFlj',
    'cXRo',
    'UnJq',
    'c09W',
    'UWdP',
    'ZEpI',
    'VlJJ',
    'dElK',
    'dURl',
    'TUph',
    'YUFL',
    'bWFG',
    'Rkx2',
    'bG14',
    'dVdG',
    'eFp5',
    'UlhC',
    'dVls',
    'QktM',
    'Z2V0QWxsUGxheWVycw\x3d\x3d',
    'RFdV',
    'Zmli',
    'Vm9J',
    'RG9C',
    'bW1h',
    'TVBJ',
    'WnFa',
    'Skhz',
    'elRx',
    'b2t6',
    'UFVj',
    'SnFm',
    'clpX',
    'd0dj',
    'TU5r',
    'YmtY',
    'Z2ZC',
    'WkZT',
    'd2xZ',
    'bmdW',
    'aVJk',
    'ZVNs',
    'UktU',
    'b3ZG',
    'Zklp',
    'YkxR',
    'Wnlz',
    'VFdJ',
    'UlhK',
    'TmxT',
    'MTAw',
    'MTAx',
    'MTAy',
    'MTAz',
    'MTA0',
    'MTA1',
    'MTA2',
    'WXVX',
    'eENz',
    'VnpY',
    'bmdj',
    'MTA3',
    'MTA4',
    'MTA5',
    'MTEw',
    'Qlpn',
    'T1F3',
    'MTEx',
    'U0do',
    'MTEy',
    'Z2xH',
    'MTEz',
    'a0R2',
    'MTE0',
    'ckhi',
    'MTE1',
    'MTE2',
    'MTE3',
    'MTE4',
    'MTE5',
    'RFV2',
    'MTIw',
    'MTIx',
    'MTIy',
    'THZX',
    'bVpP',
    'enpr',
    'MTIz',
    'ZmNa',
    'MTI0',
    'MTI1',
    'MTI2',
    'ZWJO',
    'bWNm',
    'YWRY',
    'Rmhr',
    'MTI3',
    'ZG1S',
    'VFZ4',
    'V0RD',
    'T3p4',
    'MTI4',
    'MTI5',
    'YnZY',
    'TVFp',
    'bmp2',
    'MTMw',
    'cE5y',
    'MTMx',
    'eGJW',
    'a1hZ',
    'bGta',
    'RVVD',
    'RUpp',
    'MTMy',
    'U0Nw',
    'RWdY',
    'MTMz',
    'MTM0',
    'eFpu',
    'MTM1',
    'MTM2',
    'MTM3',
    'SWhY',
    'MTM4',
    'S2pM',
    'T3l3',
    'MTM5',
    'QUVs',
    'dldQ',
    'dXN4',
    'MTQw',
    'WEFk',
    'MTQx',
    'MTQy',
    'bFZR',
    'MTQz',
    'MTQ0',
    'MTQ1',
    'MTQ2',
    'MTQ3',
    'MTQ4',
    'amJI',
    'WUZR',
    'aEZR',
    'VnFU',
    'cERs',
    'VVdk',
    'amdN',
    'bmJH',
    'RW52aXJvbm1lbnQ\x3d',
    'Z2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5',
    'L21jdG9vbHMvc2NyaXB0cy8\x3d',
    'RmlsZQ\x3d\x3d',
    'bWtkaXJz',
    'dWNp',
    'M3wwfDZ8MTh8MTB8MTN8MTV8MTl8MTJ8OXw3fDIzfDJ8NXwxNnwyMXwyNHwyNXwyMHwxNHwyMnw4fDE3fDR8MTF8MQ\x3d\x3d',
    'cm5H',
    'Z1hW',
    '5L2\x2f55So5pa55rOV6K\x2b35YmN5b6A5p\x2bl55yL5L2\x2f55So6K\x2b05piOID4\x3d',
    'bmF1',
    'Uk5C',
    'amZJ',
    'ZFVB',
    'ZmFM',
    'SXdx',
    'bGVuZ3Ro'
];
(function (_0xd690d9, _0x44368e) {
    var _0x59ce55 = function (_0x3113db) {
        while (--_0x3113db) {
            _0xd690d9['\x70\x75\x73\x68'](_0xd690d9['\x73\x68\x69\x66\x74']());
        }
    };
    _0x59ce55(++_0x44368e);
}(_0xcda2, 0x1a2));
var _0x2cda = function (_0x15739, _0x452800) {
    _0x15739 = _0x15739 - 0x0;
    var _0x742524 = _0xcda2[_0x15739];
    if (_0x2cda['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x21f4ca = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x50a55e = _0x21f4ca();
            var _0xdfe59d = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x50a55e['\x61\x74\x6f\x62'] || (_0x50a55e['\x61\x74\x6f\x62'] = function (_0x245ac1) {
                var _0x222cbe = String(_0x245ac1)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x46218f = 0x0, _0x42626d, _0x4ac876, _0x411de0 = 0x0, _0x286633 = ''; _0x4ac876 = _0x222cbe['\x63\x68\x61\x72\x41\x74'](_0x411de0++); ~_0x4ac876 && (_0x42626d = _0x46218f % 0x4 ? _0x42626d * 0x40 + _0x4ac876 : _0x4ac876, _0x46218f++ % 0x4) ? _0x286633 += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x42626d >> (-0x2 * _0x46218f & 0x6)) : 0x0) {
                    _0x4ac876 = _0xdfe59d['\x69\x6e\x64\x65\x78\x4f\x66'](_0x4ac876);
                }
                return _0x286633;
            });
        }());
        _0x2cda['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x5a3359) {
            var _0xd926ee = atob(_0x5a3359);
            var _0x415029 = [];
            for (var _0x1ccca8 = 0x0, _0x451544 = _0xd926ee['\x6c\x65\x6e\x67\x74\x68']; _0x1ccca8 < _0x451544; _0x1ccca8++) {
                _0x415029 += '\x25' + ('\x30\x30' + _0xd926ee['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x1ccca8)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x415029);
        };
        _0x2cda['\x64\x61\x74\x61'] = {};
        _0x2cda['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0x2cda['\x64\x61\x74\x61'][_0x15739] === undefined) {
        _0x742524 = _0x2cda['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x742524);
        _0x2cda['\x64\x61\x74\x61'][_0x15739] = _0x742524;
    } else {
        _0x742524 = _0x2cda['\x64\x61\x74\x61'][_0x15739];
    }
    return _0x742524;
};
function EffectEditor() {
    var _0x253b7f = {
        '\x76\x6b\x53': function _0x4d2be5(_0x185ba4) {
            return _0x185ba4();
        },
        '\x61\x74\x7a': function _0x4f117e(_0x5b7798, _0x162da9, _0x52355a) {
            return _0x5b7798(_0x162da9, _0x52355a);
        },
        '\x44\x71\x6d': function _0x5129f5(_0x1d3492, _0x502b63, _0x4e29aa, _0x4913b6, _0x2585cf, _0x109e56, _0x2da2a6, _0x4a26ab, _0x24e31a, _0x2e287d, _0x38128a, _0x466b73) {
            return _0x1d3492(_0x502b63, _0x4e29aa, _0x4913b6, _0x2585cf, _0x109e56, _0x2da2a6, _0x4a26ab, _0x24e31a, _0x2e287d, _0x38128a, _0x466b73);
        },
        '\x42\x48\x78': function _0x5613d8(_0x29c4bd, _0x555e07) {
            return _0x29c4bd * _0x555e07;
        },
        '\x71\x6b\x44': function _0x461ef0(_0x1871cf) {
            return _0x1871cf();
        },
        '\x79\x57\x59': function _0x37c456(_0x33f4bb) {
            return _0x33f4bb();
        },
        '\x62\x48\x6f': function _0x555f20(_0x6038d6) {
            return _0x6038d6();
        },
        '\x68\x56\x6c': function _0x26f64e(_0x10a72d, _0x478d8f, _0x578371) {
            return _0x10a72d(_0x478d8f, _0x578371);
        },
        '\x4a\x79\x61': function _0x37ed1d(_0x10f6e7, _0x366450, _0x15dfea, _0x2060a4, _0x1da312) {
            return _0x10f6e7(_0x366450, _0x15dfea, _0x2060a4, _0x1da312);
        },
        '\x73\x4f\x47': function _0x403c32(_0x2bcfa2, _0x2b33d0, _0x599421, _0x1402aa, _0x589afb) {
            return _0x2bcfa2(_0x2b33d0, _0x599421, _0x1402aa, _0x589afb);
        },
        '\x71\x4a\x4b': function _0x13dd4d(_0x4bb9cd, _0x37e371, _0x36cfff, _0x2b6f64, _0x300971, _0x17ddad, _0x5eb116, _0x4691a4, _0x18b949, _0x5891b8) {
            return _0x4bb9cd(_0x37e371, _0x36cfff, _0x2b6f64, _0x300971, _0x17ddad, _0x5eb116, _0x4691a4, _0x18b949, _0x5891b8);
        },
        '\x44\x57\x4f': function _0x2ee477(_0x10d578, _0x9c0bba) {
            return _0x10d578 * _0x9c0bba;
        },
        '\x68\x6b\x6d': function _0x27f3d9(_0xe600a9, _0x148e0d) {
            return _0xe600a9 * _0x148e0d;
        },
        '\x77\x4e\x55': function _0x4de5e7(_0x3789f3, _0xd0c5a3, _0x19fa7a, _0x342c5d, _0x4a31c9, _0x3b0461, _0x53cd3e, _0x182330, _0x1e2192, _0x3a23e4) {
            return _0x3789f3(_0xd0c5a3, _0x19fa7a, _0x342c5d, _0x4a31c9, _0x3b0461, _0x53cd3e, _0x182330, _0x1e2192, _0x3a23e4);
        },
        '\x6a\x47\x66': function _0x49063e(_0x5c7008, _0x1f1062) {
            return _0x5c7008 * _0x1f1062;
        },
        '\x46\x45\x73': function _0x3dc35a(_0x4ec5d3, _0x1347e8) {
            return _0x4ec5d3 * _0x1347e8;
        },
        '\x6a\x43\x44': function _0xac51df(_0x3503c1, _0x5160c3) {
            return _0x3503c1 * _0x5160c3;
        },
        '\x63\x6c\x4f': function _0x2c11db(_0x1d6c97, _0x473536) {
            return _0x1d6c97 != _0x473536;
        },
        '\x71\x41\x62': function _0x332301(_0x381636, _0x3752e3) {
            return _0x381636(_0x3752e3);
        }
    };
    ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x3dfc11 = {
                '\x5a\x41\x69': function _0x5e1700(_0x1638aa) {
                    return _0x253b7f[_0x2cda('0x3')](_0x1638aa);
                }
            };
            try {
                var _0xdbb881 = _0x2cda('0x4')[_0x2cda('0x5')]('\x7c'), _0x3953c1 = 0x0;
                while (!![]) {
                    switch (_0xdbb881[_0x3953c1++]) {
                    case '0':
                        av2[_0x2cda('0x6')](_0x253b7f[_0x2cda('0x7')](addoption, _0x2cda('0x8'), function (_0x5ea2ab) {
                            Entity[_0x2cda('0x9')](_0x253b7f[_0x2cda('0x3')](getPlayerEnt), 0x8, 0x2ee0, 0x1, ![], ![]);
                        }));
                        continue;
                    case '1':
                        av2[_0x2cda('0x6')](_0x253b7f[_0x2cda('0x7')](addoption, '\u591c\u89c6', function (_0x1e45bb) {
                            Entity[_0x2cda('0x9')](_0x3dfc11[_0x2cda('0xa')](getPlayerEnt), 0x10, 0x2ee0, 0x1, ![], ![]);
                        }));
                        continue;
                    case '2':
                        av3[_0x2cda('0x6')](cv1);
                        continue;
                    case '3':
                        ac1 = _0x253b7f[_0x2cda('0xb')](NewCDV, 0x2, null, 0x0, av1, _0x253b7f[_0x2cda('0xc')](_0x253b7f[_0x2cda('0xd')](W), 0.3), _0x253b7f[_0x2cda('0xc')](_0x253b7f[_0x2cda('0xe')](H), 0.49), ![], !![], 'RB', _0x253b7f[_0x2cda('0xc')](_0x253b7f[_0x2cda('0xf')](W), 0.08), 0x0);
                        continue;
                    case '4':
                        av1[_0x2cda('0x6')](av2);
                        continue;
                    case '5':
                        av2[_0x2cda('0x6')](_0x253b7f[_0x2cda('0x10')](addoption, _0x2cda('0x11'), function (_0x56c715) {
                            Entity[_0x2cda('0x12')](_0x3dfc11[_0x2cda('0xa')](getPlayerEnt));
                        }));
                        continue;
                    case '6':
                        _0x253b7f[_0x2cda('0x13')](UIPlumb, av1, 0x64, 0x0, 0x96);
                        continue;
                    case '7':
                        cv1 = _0x253b7f[_0x2cda('0x14')](NewText, _0x2cda('0x15'), 'CC', 0xa, _0x2cda('0x16'));
                        continue;
                    case '8':
                        av2[_0x2cda('0x6')](_0x253b7f[_0x2cda('0x10')](addoption, '\u6025\u8feb', function (_0x2ca8a1) {
                            Entity[_0x2cda('0x9')](_0x3dfc11[_0x2cda('0xa')](getPlayerEnt), 0x3, 0x2ee0, 0xff, ![], ![]);
                        }));
                        continue;
                    case '9':
                        av3 = _0x253b7f[_0x2cda('0x17')](NewView, 'LL', _0x253b7f[_0x2cda('0x18')](_0x253b7f[_0x2cda('0xf')](W), 0.3), _0x253b7f[_0x2cda('0x19')](_0x253b7f[_0x2cda('0xf')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1a')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '10':
                        av2 = _0x253b7f[_0x2cda('0x1b')](NewView, 'LL', _0x253b7f[_0x2cda('0x1c')](_0x253b7f[_0x2cda('0xf')](W), 0.3), _0x253b7f[_0x2cda('0x1c')](_0x253b7f[_0x2cda('0xf')](H), 0.49), 'CT', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0xa, null);
                        continue;
                    case '11':
                        av4 = _0x253b7f[_0x2cda('0x1b')](NewView, 'LL', _0x253b7f[_0x2cda('0x1e')](_0x253b7f[_0x2cda('0xf')](W), 0.3), _0x253b7f[_0x2cda('0x1e')](_0x253b7f[_0x2cda('0xf')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], [
                            0x0,
                            0x0,
                            0xa,
                            0xa
                        ], null);
                        continue;
                    case '12':
                        av1 = _0x253b7f[_0x2cda('0x1b')](NewView, 'SV', _0x253b7f[_0x2cda('0x1f')](_0x253b7f[_0x2cda('0xf')](W), 0.3), _0x253b7f[_0x2cda('0x1f')](_0x253b7f[_0x2cda('0xf')](H), 0.49), null, null, 0x2, null, null, null);
                        continue;
                    case '13':
                        if (_0x253b7f[_0x2cda('0x20')](ac1, null)) {
                            ac1[_0x2cda('0x21')]();
                            ac1 = null;
                        }
                        continue;
                    case '14':
                        av2[_0x2cda('0x6')](av4);
                        continue;
                    case '15':
                        av2[_0x2cda('0x6')](av3);
                        continue;
                    case '16':
                        ;
                        continue;
                    }
                    break;
                }
            } catch (_0x5e1d42) {
                _0x253b7f[_0x2cda('0x22')](print, _0x5e1d42);
            }
        }
    }));
}
;
var s1, s2, s3, s4, s5, s6, s7, s8;
function PlayerPosition() {
    var _0x1cf428 = {
        '\x66\x69\x62': function _0x4bbf5d(_0x59337a, _0x4c4da8) {
            return _0x59337a != _0x4c4da8;
        },
        '\x76\x70\x70': function _0x48d7e5(_0x1fa01c, _0xac0794) {
            return _0x1fa01c != _0xac0794;
        },
        '\x4a\x51\x49': function _0xa7d530(_0x1ca525, _0x50221f) {
            return _0x1ca525 != _0x50221f;
        },
        '\x50\x6f\x68': function _0x1c53f1(_0x40ca8a, _0x4b8122) {
            return _0x40ca8a != _0x4b8122;
        },
        '\x53\x57\x54': function _0x4ad83b(_0x4272a4, _0x5232c8, _0x41f098, _0x39df91, _0x717322) {
            return _0x4272a4(_0x5232c8, _0x41f098, _0x39df91, _0x717322);
        },
        '\x79\x72\x43': function _0x4db732(_0x5ebe0e, _0x5b7537, _0x59991c, _0x1084e9, _0x49b056, _0x419172, _0x4a68e, _0xfd1a8, _0x8759c9, _0x3e5e5b) {
            return _0x5ebe0e(_0x5b7537, _0x59991c, _0x1084e9, _0x49b056, _0x419172, _0x4a68e, _0xfd1a8, _0x8759c9, _0x3e5e5b);
        },
        '\x77\x50\x78': function _0x4d987f(_0x369c77, _0x457dc5) {
            return _0x369c77 * _0x457dc5;
        },
        '\x73\x61\x4c': function _0x2dafdb(_0x157a5f) {
            return _0x157a5f();
        },
        '\x59\x4b\x48': function _0x53b4ee(_0x569e5a) {
            return _0x569e5a();
        },
        '\x4c\x6f\x47': function _0x12dab2(_0x5911fe, _0x55b1ea) {
            return _0x5911fe * _0x55b1ea;
        },
        '\x66\x59\x4b': function _0x56ff57(_0x4bea0d) {
            return _0x4bea0d();
        },
        '\x6a\x4c\x67': function _0x3ac99a(_0x4edba7, _0x4f678e) {
            return _0x4edba7 * _0x4f678e;
        },
        '\x79\x4c\x65': function _0x4770da(_0x240c5e, _0x2cb5a0) {
            return _0x240c5e * _0x2cb5a0;
        },
        '\x47\x56\x70': function _0x30259d(_0xd468b6) {
            return _0xd468b6();
        },
        '\x44\x52\x66': function _0xb1737b(_0x461cf0, _0x6c8e24) {
            return _0x461cf0 * _0x6c8e24;
        },
        '\x4b\x52\x57': function _0xc77024(_0x3d6338) {
            return _0x3d6338();
        },
        '\x79\x50\x47': function _0x56abcb(_0x272153, _0xdc86b6, _0x4da50c, _0x2be4c7, _0x292231, _0x402d8e, _0xcb3a76, _0x2164b3, _0x2f923e, _0x44b163) {
            return _0x272153(_0xdc86b6, _0x4da50c, _0x2be4c7, _0x292231, _0x402d8e, _0xcb3a76, _0x2164b3, _0x2f923e, _0x44b163);
        },
        '\x59\x7a\x4e': function _0x3ceb65(_0x5e95ae) {
            return _0x5e95ae();
        },
        '\x53\x65\x43': function _0x37a3f7(_0x14c5ca) {
            return _0x14c5ca();
        },
        '\x6d\x46\x41': function _0x6a1a65(_0x38dbda, _0x1055cb, _0x515910, _0x4a69f8, _0x734974, _0x88c254, _0xba52cd, _0x4ecde6, _0x5ddb1a, _0x16082c) {
            return _0x38dbda(_0x1055cb, _0x515910, _0x4a69f8, _0x734974, _0x88c254, _0xba52cd, _0x4ecde6, _0x5ddb1a, _0x16082c);
        },
        '\x57\x6e\x6d': function _0x1a6905(_0x39f79a, _0x176ad1) {
            return _0x39f79a * _0x176ad1;
        },
        '\x6a\x78\x6f': function _0x81c915(_0x26d49f) {
            return _0x26d49f();
        },
        '\x46\x66\x43': function _0x3fc145(_0x132e5b, _0x3e7dd8) {
            return _0x132e5b * _0x3e7dd8;
        },
        '\x65\x6c\x6d': function _0x43a321(_0x9527ed) {
            return _0x9527ed();
        },
        '\x6e\x6e\x75': function _0x300a51(_0x41f890, _0x2723c8, _0x15aa9a, _0x520d45, _0x445faf) {
            return _0x41f890(_0x2723c8, _0x15aa9a, _0x520d45, _0x445faf);
        },
        '\x77\x56\x78': function _0x1d8bce(_0xdca77e, _0x8027fa) {
            return _0xdca77e * _0x8027fa;
        },
        '\x52\x4a\x48': function _0x591274(_0x265c72, _0x6ac9cc) {
            return _0x265c72 * _0x6ac9cc;
        },
        '\x58\x57\x4e': function _0x13ef5a(_0x53436a) {
            return _0x53436a();
        },
        '\x62\x48\x4d': function _0x218d0d(_0x26ece8, _0xdd3d1b, _0x357968, _0x4fcc99, _0x2efe4f, _0x5a5cbc, _0x5cc739, _0x3a6e41, _0xa39f8f, _0x4952cf) {
            return _0x26ece8(_0xdd3d1b, _0x357968, _0x4fcc99, _0x2efe4f, _0x5a5cbc, _0x5cc739, _0x3a6e41, _0xa39f8f, _0x4952cf);
        },
        '\x6c\x78\x4f': function _0x5fbead(_0x3981e9, _0x1eaea8) {
            return _0x3981e9 * _0x1eaea8;
        },
        '\x5a\x65\x47': function _0x259c68(_0x3cbdae) {
            return _0x3cbdae();
        },
        '\x7a\x4c\x4c': function _0x47f7f8(_0x4c9884, _0x3ca9e7, _0x4ee6a2, _0x2f538c, _0x2b6c90, _0x538a1b, _0x1e5ee7, _0x1136d8, _0x3daf93, _0x4a855e) {
            return _0x4c9884(_0x3ca9e7, _0x4ee6a2, _0x2f538c, _0x2b6c90, _0x538a1b, _0x1e5ee7, _0x1136d8, _0x3daf93, _0x4a855e);
        },
        '\x48\x59\x63': function _0xeab711(_0x1772af, _0x1a9f9a) {
            return _0x1772af * _0x1a9f9a;
        },
        '\x71\x74\x68': function _0x52a3fa(_0x434132, _0x4edd99) {
            return _0x434132 * _0x4edd99;
        },
        '\x52\x72\x6a': function _0x222546(_0x5e2ca5, _0x2b5ee0, _0x3d340d, _0x185e03, _0x24b432, _0x443965, _0x1ec8f9, _0x8f6b8f, _0xc30936, _0x3a1c3b, _0x12b462, _0x2e7a96) {
            return _0x5e2ca5(_0x2b5ee0, _0x3d340d, _0x185e03, _0x24b432, _0x443965, _0x1ec8f9, _0x8f6b8f, _0xc30936, _0x3a1c3b, _0x12b462, _0x2e7a96);
        },
        '\x73\x4f\x56': function _0x4991e3(_0x1f939b, _0x3902ff) {
            return _0x1f939b * _0x3902ff;
        },
        '\x51\x67\x4f': function _0x517fda(_0x21b1d4, _0x28ce07) {
            return _0x21b1d4 * _0x28ce07;
        },
        '\x64\x4a\x48': function _0x55ee34(_0x197d38) {
            return _0x197d38();
        },
        '\x56\x52\x49': function _0x149762(_0xd8cab4, _0x25e572, _0x58127a, _0x47ad05, _0x3c3b51, _0x3128b0, _0xa799e4, _0x59d667, _0x5083a7, _0x4daf6b) {
            return _0xd8cab4(_0x25e572, _0x58127a, _0x47ad05, _0x3c3b51, _0x3128b0, _0xa799e4, _0x59d667, _0x5083a7, _0x4daf6b);
        },
        '\x74\x49\x4a': function _0xe13139(_0x64bd1b) {
            return _0x64bd1b();
        },
        '\x75\x44\x65': function _0x5dff4d(_0x599545, _0x271cab) {
            return _0x599545 * _0x271cab;
        },
        '\x4d\x4a\x61': function _0x55b9dd(_0x310029) {
            return _0x310029();
        },
        '\x6d\x61\x46': function _0x2d517e(_0x208230, _0x266518) {
            return _0x208230 * _0x266518;
        },
        '\x46\x4c\x76': function _0x4ebdb2(_0x540be2) {
            return _0x540be2();
        },
        '\x75\x57\x46': function _0x5a78b4(_0xa5bcfb) {
            return _0xa5bcfb();
        },
        '\x78\x5a\x79': function _0x27bf40(_0x59cd63, _0xb2d12d) {
            return _0x59cd63 * _0xb2d12d;
        },
        '\x52\x58\x42': function _0x33368d(_0x316d93, _0x36e153, _0x31adbf, _0x3592b7, _0xa454db, _0xec21fa, _0x184052, _0x282bbd, _0x274626, _0x715e74) {
            return _0x316d93(_0x36e153, _0x31adbf, _0x3592b7, _0xa454db, _0xec21fa, _0x184052, _0x282bbd, _0x274626, _0x715e74);
        },
        '\x75\x59\x6c': function _0x19a1a7(_0x2af7e3, _0x3dfb07) {
            return _0x2af7e3 * _0x3dfb07;
        },
        '\x42\x4b\x4c': function _0x130717(_0x24e0d3) {
            return _0x24e0d3();
        },
        '\x44\x57\x55': function _0x5b6248(_0x3b5b54, _0x4c3b19) {
            return _0x3b5b54 * _0x4c3b19;
        },
        '\x56\x6f\x49': function _0x5809d5(_0x574526, _0x2c640b, _0x4b2638, _0x250f39, _0x3f9924, _0x5f11d9, _0x593f1a, _0x3f9a43, _0x1cbea1, _0x3e5d1a) {
            return _0x574526(_0x2c640b, _0x4b2638, _0x250f39, _0x3f9924, _0x5f11d9, _0x593f1a, _0x3f9a43, _0x1cbea1, _0x3e5d1a);
        },
        '\x44\x6f\x42': function _0x329e96(_0x4464c4, _0x354300) {
            return _0x4464c4 * _0x354300;
        },
        '\x6d\x6d\x61': function _0x21f3b7(_0x1e6103) {
            return _0x1e6103();
        },
        '\x4d\x50\x49': function _0xfe3195(_0x2316ea, _0x117aa7) {
            return _0x2316ea * _0x117aa7;
        },
        '\x5a\x71\x5a': function _0x107cb3(_0x3ea896) {
            return _0x3ea896();
        },
        '\x4a\x48\x73': function _0x59ac74(_0x5e0ae0, _0x524a06, _0x56f79a, _0xc56c04, _0x52183e, _0xcf7c74, _0x10c865, _0xb948e3, _0x38d3a8, _0x39bb2f) {
            return _0x5e0ae0(_0x524a06, _0x56f79a, _0xc56c04, _0x52183e, _0xcf7c74, _0x10c865, _0xb948e3, _0x38d3a8, _0x39bb2f);
        },
        '\x7a\x54\x71': function _0x21d593(_0x2241e4) {
            return _0x2241e4();
        },
        '\x6f\x6b\x7a': function _0x4e4276(_0x558620, _0x5ca4bb) {
            return _0x558620 * _0x5ca4bb;
        },
        '\x50\x55\x63': function _0x18f63e(_0x34670b, _0xd94efb, _0x29b41d, _0x57491b, _0x37eb66, _0x10e77b, _0x27687b, _0x37e8dc, _0x309c5b, _0xbd0380) {
            return _0x34670b(_0xd94efb, _0x29b41d, _0x57491b, _0x37eb66, _0x10e77b, _0x27687b, _0x37e8dc, _0x309c5b, _0xbd0380);
        },
        '\x4a\x71\x66': function _0x4311ad(_0x1ac9d5, _0x2fd111) {
            return _0x1ac9d5 * _0x2fd111;
        },
        '\x72\x5a\x57': function _0x1ac4d1(_0x2cfed2) {
            return _0x2cfed2();
        },
        '\x77\x47\x63': function _0x5b0391(_0x2677c1, _0x243af0) {
            return _0x2677c1 * _0x243af0;
        },
        '\x4d\x4e\x6b': function _0x40bd93(_0x4e930f) {
            return _0x4e930f();
        },
        '\x62\x6b\x58': function _0x48dccf(_0x4647f4, _0x26a13a, _0x12ce6d, _0x384243, _0x45f4a1) {
            return _0x4647f4(_0x26a13a, _0x12ce6d, _0x384243, _0x45f4a1);
        },
        '\x67\x66\x42': function _0x4eaf38(_0x473749, _0x61ac11, _0x3089f2, _0x47f687, _0xe475ae) {
            return _0x473749(_0x61ac11, _0x3089f2, _0x47f687, _0xe475ae);
        },
        '\x5a\x46\x53': function _0x4b0524(_0x1aa1bf, _0x28c23e, _0x576342, _0x478e0e, _0x3bf642, _0x1f6494, _0x525c6f, _0x4a6ecc, _0x317a3b, _0x8a28b2) {
            return _0x1aa1bf(_0x28c23e, _0x576342, _0x478e0e, _0x3bf642, _0x1f6494, _0x525c6f, _0x4a6ecc, _0x317a3b, _0x8a28b2);
        },
        '\x77\x6c\x59': function _0x10184e(_0x30f45b, _0x12b18b) {
            return _0x30f45b * _0x12b18b;
        },
        '\x6e\x67\x56': function _0x292038(_0x304f2e) {
            return _0x304f2e();
        },
        '\x69\x52\x64': function _0xa77d9c(_0x105816, _0x4161f0) {
            return _0x105816 * _0x4161f0;
        },
        '\x65\x53\x6c': function _0x4ded2e(_0x3ff32b) {
            return _0x3ff32b();
        },
        '\x52\x4b\x54': function _0x17e3f3(_0x89d201, _0x29c7b2, _0xf8042f, _0x2b6ff0, _0x26c46c) {
            return _0x89d201(_0x29c7b2, _0xf8042f, _0x2b6ff0, _0x26c46c);
        },
        '\x6f\x76\x46': function _0x46aa0d(_0x45bd9f, _0x59234a) {
            return _0x45bd9f != _0x59234a;
        },
        '\x66\x49\x69': function _0x4307cf(_0x564fcc, _0x54b6d9, _0x3c1070, _0x2d0490, _0x3b0350, _0xb5b40d, _0xcd49fb, _0x45d5f6, _0x424499, _0x16ffdd) {
            return _0x564fcc(_0x54b6d9, _0x3c1070, _0x2d0490, _0x3b0350, _0xb5b40d, _0xcd49fb, _0x45d5f6, _0x424499, _0x16ffdd);
        },
        '\x62\x4c\x51': function _0x2184b5(_0x2fc217) {
            return _0x2fc217();
        },
        '\x5a\x79\x73': function _0x470610(_0x397967) {
            return _0x397967();
        },
        '\x54\x57\x49': function _0x6ee4b2(_0x12eec1, _0x1fa9f9, _0xee742e, _0x2de352, _0x18be97, _0x5212dc, _0x44aa26, _0x3129dd, _0x1ed516, _0x4b5b00) {
            return _0x12eec1(_0x1fa9f9, _0xee742e, _0x2de352, _0x18be97, _0x5212dc, _0x44aa26, _0x3129dd, _0x1ed516, _0x4b5b00);
        },
        '\x52\x58\x4a': function _0x11326d(_0x3a9630, _0x5993d2) {
            return _0x3a9630 * _0x5993d2;
        },
        '\x4e\x6c\x53': function _0x244e33(_0x3ed94a) {
            return _0x3ed94a();
        },
        '\x59\x75\x57': function _0x5de530(_0x57e366, _0x51f38b, _0x304706, _0x3cbf32, _0x31bf21, _0x525d76, _0x365e5c, _0x4f4a37, _0x2e3643, _0x181b36) {
            return _0x57e366(_0x51f38b, _0x304706, _0x3cbf32, _0x31bf21, _0x525d76, _0x365e5c, _0x4f4a37, _0x2e3643, _0x181b36);
        },
        '\x78\x43\x73': function _0x4951c6(_0x345850) {
            return _0x345850();
        },
        '\x56\x7a\x58': function _0x58162e(_0x124d81, _0x561d28) {
            return _0x124d81 * _0x561d28;
        },
        '\x6e\x67\x63': function _0x66a16c(_0x13e4ff) {
            return _0x13e4ff();
        },
        '\x42\x5a\x67': function _0x16de3c(_0x405ea7, _0x2135ee, _0x4738e9, _0x5bd1ab, _0xffef8f, _0x43c379, _0x3cc4f7, _0x86a934, _0x3680e5, _0x498c3a) {
            return _0x405ea7(_0x2135ee, _0x4738e9, _0x5bd1ab, _0xffef8f, _0x43c379, _0x3cc4f7, _0x86a934, _0x3680e5, _0x498c3a);
        },
        '\x4f\x51\x77': function _0x3b2db7(_0x28e49b) {
            return _0x28e49b();
        },
        '\x53\x47\x68': function _0x429de7(_0x3ac7f6, _0x3d5c99) {
            return _0x3ac7f6 != _0x3d5c99;
        },
        '\x67\x6c\x47': function _0x46bac0(_0x1a159e, _0x25bc71) {
            return _0x1a159e != _0x25bc71;
        },
        '\x6b\x44\x76': function _0xf9fe98(_0x81297a, _0x473e55) {
            return _0x81297a != _0x473e55;
        },
        '\x72\x48\x62': function _0x11ccbf(_0x5bf9bb, _0x515c6a, _0x6c223d, _0x122334, _0xd5772c) {
            return _0x5bf9bb(_0x515c6a, _0x6c223d, _0x122334, _0xd5772c);
        },
        '\x44\x55\x76': function _0x34196d(_0xcf41a4, _0xb5b6e5) {
            return _0xcf41a4 != _0xb5b6e5;
        },
        '\x4c\x76\x57': function _0x2cd97b(_0x44d626, _0x4e4aae, _0xe05d5c, _0xa144fd, _0xe26416, _0x2cb3c3, _0x43533c, _0x295f7e, _0x282be1, _0x2ded2f) {
            return _0x44d626(_0x4e4aae, _0xe05d5c, _0xa144fd, _0xe26416, _0x2cb3c3, _0x43533c, _0x295f7e, _0x282be1, _0x2ded2f);
        },
        '\x6d\x5a\x4f': function _0x318340(_0x2f6086) {
            return _0x2f6086();
        },
        '\x7a\x7a\x6b': function _0x58c1c8(_0x2e59bb, _0x2b519b) {
            return _0x2e59bb * _0x2b519b;
        },
        '\x66\x63\x5a': function _0x2570e0(_0x2a4b79, _0x3003fb) {
            return _0x2a4b79 != _0x3003fb;
        },
        '\x65\x62\x4e': function _0x5b5705(_0x5cee3d, _0x5bca4e, _0x5dc146, _0x16f797, _0x379640, _0x52920a, _0x98ec4, _0x4a354e, _0x3f682f, _0x5ee0) {
            return _0x5cee3d(_0x5bca4e, _0x5dc146, _0x16f797, _0x379640, _0x52920a, _0x98ec4, _0x4a354e, _0x3f682f, _0x5ee0);
        },
        '\x6d\x63\x66': function _0x482317(_0x8c8c68, _0x2cab94) {
            return _0x8c8c68 * _0x2cab94;
        },
        '\x61\x64\x58': function _0x5d5bc9(_0xa614de, _0x11760e) {
            return _0xa614de * _0x11760e;
        },
        '\x46\x68\x6b': function _0xa9fee8(_0x1ca0bd) {
            return _0x1ca0bd();
        },
        '\x64\x6d\x52': function _0x77d5d4(_0x59a654, _0x1ff9a6, _0x53ade4, _0x4e8ccc, _0x49f14d, _0x447e8f, _0x1205c8, _0x1a7400, _0x3e7856, _0x5f0fe9) {
            return _0x59a654(_0x1ff9a6, _0x53ade4, _0x4e8ccc, _0x49f14d, _0x447e8f, _0x1205c8, _0x1a7400, _0x3e7856, _0x5f0fe9);
        },
        '\x54\x56\x78': function _0x27bf05(_0x5b3534, _0xd02cef) {
            return _0x5b3534 * _0xd02cef;
        },
        '\x57\x44\x43': function _0x26d72f(_0x5b16cd, _0x5793d1) {
            return _0x5b16cd * _0x5793d1;
        },
        '\x4f\x7a\x78': function _0x940462(_0xc8a1ff) {
            return _0xc8a1ff();
        },
        '\x62\x76\x58': function _0x432576(_0x4e3283) {
            return _0x4e3283();
        },
        '\x4d\x51\x69': function _0x5adad7(_0x5ca9da, _0x4ea4d3) {
            return _0x5ca9da * _0x4ea4d3;
        },
        '\x6e\x6a\x76': function _0x457163(_0x104b62) {
            return _0x104b62();
        },
        '\x70\x4e\x72': function _0x3aee08(_0x2cb0a2, _0x117406) {
            return _0x2cb0a2 != _0x117406;
        },
        '\x78\x62\x56': function _0x399436(_0x700c68, _0x2a417f, _0x2583f8, _0x5d9495, _0x30adff, _0x3100cc, _0x35e0dd, _0x4aaa46, _0x2222e5, _0x2fbd93) {
            return _0x700c68(_0x2a417f, _0x2583f8, _0x5d9495, _0x30adff, _0x3100cc, _0x35e0dd, _0x4aaa46, _0x2222e5, _0x2fbd93);
        },
        '\x6b\x58\x59': function _0x2140c8(_0x4ede52, _0x171b5b) {
            return _0x4ede52 * _0x171b5b;
        },
        '\x6c\x6b\x5a': function _0x4f1cf1(_0x3cd7ab) {
            return _0x3cd7ab();
        },
        '\x45\x55\x43': function _0x45a16a(_0x393eac, _0x116c5f) {
            return _0x393eac * _0x116c5f;
        },
        '\x45\x4a\x69': function _0x14af17(_0x3d1d57) {
            return _0x3d1d57();
        },
        '\x53\x43\x70': function _0x4c383c(_0x1d4ba5, _0x41d951) {
            return _0x1d4ba5 * _0x41d951;
        },
        '\x45\x67\x58': function _0x5cde0d(_0xbac390) {
            return _0xbac390();
        },
        '\x78\x5a\x6e': function _0x3d3d3c(_0x39a8db, _0x2c4da0) {
            return _0x39a8db * _0x2c4da0;
        },
        '\x49\x68\x58': function _0x5d6b97(_0x4e877a, _0x13a77e, _0x3096d5, _0x517654, _0x52b13d) {
            return _0x4e877a(_0x13a77e, _0x3096d5, _0x517654, _0x52b13d);
        },
        '\x4b\x6a\x4c': function _0x20eb28(_0x26e73d, _0x77390d, _0x175628, _0x430fcb, _0xb12a91, _0x4c0ac8, _0x1e3424, _0x5f35f5, _0x1b7fc9, _0x49a04b) {
            return _0x26e73d(_0x77390d, _0x175628, _0x430fcb, _0xb12a91, _0x4c0ac8, _0x1e3424, _0x5f35f5, _0x1b7fc9, _0x49a04b);
        },
        '\x4f\x79\x77': function _0x53094c(_0x479c0e, _0x1c27b8) {
            return _0x479c0e * _0x1c27b8;
        },
        '\x41\x45\x6c': function _0x358503(_0xe5225d) {
            return _0xe5225d();
        },
        '\x76\x57\x50': function _0x252dff(_0x455683, _0x48c230) {
            return _0x455683 * _0x48c230;
        },
        '\x75\x73\x78': function _0x5bd183(_0x4046a0) {
            return _0x4046a0();
        },
        '\x58\x41\x64': function _0x291fd2(_0x260978, _0x50cb84, _0x24b361, _0x9366a0, _0x480002, _0x105a97, _0x91a127, _0x411741, _0x297685, _0x3188ec) {
            return _0x260978(_0x50cb84, _0x24b361, _0x9366a0, _0x480002, _0x105a97, _0x91a127, _0x411741, _0x297685, _0x3188ec);
        },
        '\x6c\x56\x51': function _0x5c0162(_0x291bf2, _0x17b6df, _0x1d9a17, _0x5c8068, _0x76a734) {
            return _0x291bf2(_0x17b6df, _0x1d9a17, _0x5c8068, _0x76a734);
        },
        '\x6a\x62\x48': function _0xcafe6c(_0x4aae95, _0x3e549d, _0x10c208, _0x4fdb21, _0x5146f4, _0x576a6e, _0x162caf, _0x20cb7b, _0x2ab1a7, _0x3e5368) {
            return _0x4aae95(_0x3e549d, _0x10c208, _0x4fdb21, _0x5146f4, _0x576a6e, _0x162caf, _0x20cb7b, _0x2ab1a7, _0x3e5368);
        },
        '\x59\x46\x51': function _0x2ed47(_0x547d9a, _0x1e4fde) {
            return _0x547d9a * _0x1e4fde;
        },
        '\x68\x46\x51': function _0x5be434(_0x25498e) {
            return _0x25498e();
        },
        '\x56\x71\x54': function _0x46e335(_0x5f3a1a) {
            return _0x5f3a1a();
        },
        '\x70\x44\x6c': function _0x19832d(_0x279b2f, _0x196b4f) {
            return _0x279b2f(_0x196b4f);
        }
    };
    ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x384989 = {
                '\x6c\x6d\x78': function _0xc17fb3(_0x1b4294, _0x509d81) {
                    return _0x1cf428[_0x2cda('0x23')](_0x1b4294, _0x509d81);
                },
                '\x4e\x6d\x57': function _0x23ddc2(_0x4f8b9c, _0x2479c3) {
                    return _0x1cf428[_0x2cda('0x24')](_0x4f8b9c, _0x2479c3);
                },
                '\x61\x41\x4b': function _0x479eef(_0x1d5eab, _0x4c4a11) {
                    return _0x1cf428[_0x2cda('0x24')](_0x1d5eab, _0x4c4a11);
                }
            };
            try {
                var _0x1a72fd = _0x2cda('0x25')[_0x2cda('0x5')]('\x7c'), _0x3153a5 = 0x0;
                while (!![]) {
                    switch (_0x1a72fd[_0x3153a5++]) {
                    case '0':
                        cv1 = _0x1cf428[_0x2cda('0x26')](NewText, _0x2cda('0x27'), 'CC', 0xa, _0x2cda('0x16'));
                        continue;
                    case '1':
                        t11 = _0x1cf428[_0x2cda('0x26')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '2':
                        av2[_0x2cda('0x6')](av23);
                        continue;
                    case '3':
                        mz8 = Player[_0x2cda('0x28')](wj[0x8]);
                        continue;
                    case '4':
                        av2[_0x2cda('0x6')](av3);
                        continue;
                    case '5':
                        ;
                        continue;
                    case '6':
                        t3 = _0x1cf428[_0x2cda('0x26')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '7':
                        av23 = _0x1cf428[_0x2cda('0x29')](NewView, 'LL', _0x1cf428[_0x2cda('0x2a')](_0x1cf428[_0x2cda('0x2b')](W), 0.3), _0x1cf428[_0x2cda('0x2a')](_0x1cf428[_0x2cda('0x2c')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0xf12432) {
                            if (_0x1cf428[_0x2cda('0x2e')](wj[0xa], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xa]), Entity[_0x2cda('0x32')](wj[0xa]), Entity[_0x2cda('0x33')](wj[0xa]));
                            }
                            ;
                        });
                        continue;
                    case '8':
                        av7 = _0x1cf428[_0x2cda('0x29')](NewView, 'LL', _0x1cf428[_0x2cda('0x2a')](_0x1cf428[_0x2cda('0x2c')](W), 0.3), _0x1cf428[_0x2cda('0x34')](_0x1cf428[_0x2cda('0x2c')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x5d21a1) {
                            if (_0x384989[_0x2cda('0x35')](wj[0x2], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x2]), Entity[_0x2cda('0x32')](wj[0x2]), Entity[_0x2cda('0x33')](wj[0x2]));
                            }
                            ;
                        });
                        continue;
                    case '9':
                        av32 = _0x1cf428[_0x2cda('0x29')](NewView, 'LL', _0x1cf428[_0x2cda('0x34')](_0x1cf428[_0x2cda('0x36')](W), 0.3), _0x1cf428[_0x2cda('0x37')](_0x1cf428[_0x2cda('0x36')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '10':
                        av2[_0x2cda('0x6')](av21);
                        continue;
                    case '11':
                        ;
                        continue;
                    case '12':
                        mz2 = Player[_0x2cda('0x28')](wj[0x2]);
                        continue;
                    case '13':
                        av30 = _0x1cf428[_0x2cda('0x29')](NewView, 'LL', _0x1cf428[_0x2cda('0x38')](_0x1cf428[_0x2cda('0x39')](W), 0.3), _0x1cf428[_0x2cda('0x3a')](_0x1cf428[_0x2cda('0x3b')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '14':
                        mz13 = Player[_0x2cda('0x28')](wj[0xd]);
                        continue;
                    case '15':
                        mz7 = Player[_0x2cda('0x28')](wj[0x7]);
                        continue;
                    case '16':
                        av2[_0x2cda('0x6')](av9);
                        continue;
                    case '17':
                        av23[_0x2cda('0x6')](t10);
                        continue;
                    case '18':
                        ;
                        continue;
                    case '19':
                        av2[_0x2cda('0x6')](av15);
                        continue;
                    case '20':
                        av2[_0x2cda('0x6')](av25);
                        continue;
                    case '21':
                        av29 = _0x1cf428[_0x2cda('0x3c')](NewView, 'LL', _0x1cf428[_0x2cda('0x3a')](_0x1cf428[_0x2cda('0x3d')](W), 0.3), _0x1cf428[_0x2cda('0x3a')](_0x1cf428[_0x2cda('0x3e')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x297775) {
                            if (_0x1cf428[_0x2cda('0x2e')](wj[0xd], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xd]), Entity[_0x2cda('0x32')](wj[0xd]), Entity[_0x2cda('0x33')](wj[0xd]));
                            }
                            ;
                        });
                        continue;
                    case '22':
                        mz11 = Player[_0x2cda('0x28')](wj[0xb]);
                        continue;
                    case '23':
                        ;
                        continue;
                    case '24':
                        av2[_0x2cda('0x6')](av27);
                        continue;
                    case '25':
                        av25[_0x2cda('0x6')](t11);
                        continue;
                    case '26':
                        av31 = _0x1cf428[_0x2cda('0x3f')](NewView, 'LL', _0x1cf428[_0x2cda('0x40')](_0x1cf428[_0x2cda('0x41')](W), 0.3), _0x1cf428[_0x2cda('0x42')](_0x1cf428[_0x2cda('0x43')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x56b9e2) {
                            if (_0x1cf428[_0x2cda('0x2e')](wj[0xe], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xe]), Entity[_0x2cda('0x32')](wj[0xe]), Entity[_0x2cda('0x33')](wj[0xe]));
                            }
                            ;
                        });
                        continue;
                    case '27':
                        av3[_0x2cda('0x6')](cv1);
                        continue;
                    case '28':
                        av2[_0x2cda('0x6')](av6);
                        continue;
                    case '29':
                        ;
                        continue;
                    case '30':
                        mz3 = Player[_0x2cda('0x28')](wj[0x3]);
                        continue;
                    case '31':
                        av2[_0x2cda('0x6')](av34);
                        continue;
                    case '32':
                        t12 = _0x1cf428[_0x2cda('0x44')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '33':
                        av14 = _0x1cf428[_0x2cda('0x3f')](NewView, 'LL', _0x1cf428[_0x2cda('0x45')](_0x1cf428[_0x2cda('0x43')](W), 0.3), _0x1cf428[_0x2cda('0x46')](_0x1cf428[_0x2cda('0x47')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '34':
                        av2[_0x2cda('0x6')](av33);
                        continue;
                    case '35':
                        av13[_0x2cda('0x6')](t5);
                        continue;
                    case '36':
                        ;
                        continue;
                    case '37':
                        av5[_0x2cda('0x6')](t1);
                        continue;
                    case '38':
                        if (_0x1cf428[_0x2cda('0x24')](wj[0xb], undefined)) {
                            t11[_0x2cda('0x48')](mz11);
                        }
                        continue;
                    case '39':
                        ;
                        continue;
                    case '40':
                        ;
                        continue;
                    case '41':
                        av2[_0x2cda('0x6')](av28);
                        continue;
                    case '42':
                        av1 = _0x1cf428[_0x2cda('0x49')](NewView, 'SV', _0x1cf428[_0x2cda('0x4a')](_0x1cf428[_0x2cda('0x47')](W), 0.3), _0x1cf428[_0x2cda('0x4a')](_0x1cf428[_0x2cda('0x4b')](H), 0.49), null, null, 0x2, null, null, null);
                        continue;
                    case '43':
                        _0x1cf428[_0x2cda('0x44')](UIPlumb, av1, 0x64, 0x0, 0x96);
                        continue;
                    case '44':
                        ;
                        continue;
                    case '45':
                        av34 = _0x1cf428[_0x2cda('0x4c')](NewView, 'LL', _0x1cf428[_0x2cda('0x4d')](_0x1cf428[_0x2cda('0x4b')](W), 0.3), _0x1cf428[_0x2cda('0x4e')](_0x1cf428[_0x2cda('0x4b')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '46':
                        av2[_0x2cda('0x6')](av19);
                        continue;
                    case '47':
                        ;
                        continue;
                    case '48':
                        ac1 = _0x1cf428[_0x2cda('0x4f')](NewCDV, 0x2, null, 0x0, av1, _0x1cf428[_0x2cda('0x50')](_0x1cf428[_0x2cda('0x4b')](W), 0.3), _0x1cf428[_0x2cda('0x51')](_0x1cf428[_0x2cda('0x52')](H), 0.5), ![], !![], 'RB', _0x1cf428[_0x2cda('0x51')](_0x1cf428[_0x2cda('0x52')](W), 0.08), 0x0);
                        continue;
                    case '49':
                        av2[_0x2cda('0x6')](av20);
                        continue;
                    case '50':
                        av27[_0x2cda('0x6')](t12);
                        continue;
                    case '51':
                        t8 = _0x1cf428[_0x2cda('0x44')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '52':
                        if (_0x1cf428[_0x2cda('0x24')](wj[0x8], undefined)) {
                            t8[_0x2cda('0x48')](mz8);
                        }
                        continue;
                    case '53':
                        av2[_0x2cda('0x6')](av5);
                        continue;
                    case '54':
                        if (_0x1cf428[_0x2cda('0x24')](wj[0xa], undefined)) {
                            t10[_0x2cda('0x48')](mz10);
                        }
                        continue;
                    case '55':
                        av2[_0x2cda('0x6')](av32);
                        continue;
                    case '56':
                        av15 = _0x1cf428[_0x2cda('0x53')](NewView, 'LL', _0x1cf428[_0x2cda('0x51')](_0x1cf428[_0x2cda('0x54')](W), 0.3), _0x1cf428[_0x2cda('0x55')](_0x1cf428[_0x2cda('0x56')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x21d7b5) {
                            if (_0x384989[_0x2cda('0x57')](wj[0x6], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x6]), Entity[_0x2cda('0x32')](wj[0x6]), Entity[_0x2cda('0x33')](wj[0x6]));
                            }
                            ;
                        });
                        continue;
                    case '57':
                        mz12 = Player[_0x2cda('0x28')](wj[0xc]);
                        continue;
                    case '58':
                        av2[_0x2cda('0x6')](av10);
                        continue;
                    case '59':
                        ;
                        continue;
                    case '60':
                        av1[_0x2cda('0x6')](av2);
                        continue;
                    case '61':
                        av5 = _0x1cf428[_0x2cda('0x53')](NewView, 'LL', _0x1cf428[_0x2cda('0x55')](_0x1cf428[_0x2cda('0x56')](W), 0.3), _0x1cf428[_0x2cda('0x58')](_0x1cf428[_0x2cda('0x59')](H), 0.12), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x62fa8f) {
                            if (_0x384989[_0x2cda('0x5a')](wj[0x1], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x1]), Entity[_0x2cda('0x32')](wj[0x1]), Entity[_0x2cda('0x33')](wj[0x1]));
                            }
                            ;
                        });
                        continue;
                    case '62':
                        mz15 = Player[_0x2cda('0x28')](wj[0xf]);
                        continue;
                    case '63':
                        av2[_0x2cda('0x6')](av17);
                        continue;
                    case '64':
                        av26 = _0x1cf428[_0x2cda('0x53')](NewView, 'LL', _0x1cf428[_0x2cda('0x58')](_0x1cf428[_0x2cda('0x5b')](W), 0.3), _0x1cf428[_0x2cda('0x5c')](_0x1cf428[_0x2cda('0x5b')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '65':
                        av10 = _0x1cf428[_0x2cda('0x5d')](NewView, 'LL', _0x1cf428[_0x2cda('0x5e')](_0x1cf428[_0x2cda('0x5b')](W), 0.3), _0x1cf428[_0x2cda('0x5e')](_0x1cf428[_0x2cda('0x5f')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '66':
                        av17[_0x2cda('0x6')](t7);
                        continue;
                    case '67':
                        mz1 = Player[_0x2cda('0x28')](wj[0x1]);
                        continue;
                    case '68':
                        wj = Server[_0x2cda('0x60')]();
                        continue;
                    case '69':
                        av19 = _0x1cf428[_0x2cda('0x5d')](NewView, 'LL', _0x1cf428[_0x2cda('0x61')](_0x1cf428[_0x2cda('0x5f')](W), 0.3), _0x1cf428[_0x2cda('0x61')](_0x1cf428[_0x2cda('0x5f')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x2b86a9) {
                            if (_0x1cf428[_0x2cda('0x62')](wj[0x8], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x8]), Entity[_0x2cda('0x32')](wj[0x8]), Entity[_0x2cda('0x33')](wj[0x8]));
                            }
                            ;
                        });
                        continue;
                    case '70':
                        av11 = _0x1cf428[_0x2cda('0x63')](NewView, 'LL', _0x1cf428[_0x2cda('0x64')](_0x1cf428[_0x2cda('0x65')](W), 0.3), _0x1cf428[_0x2cda('0x66')](_0x1cf428[_0x2cda('0x67')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x42f406) {
                            if (_0x384989[_0x2cda('0x57')](wj[0x4], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x4]), Entity[_0x2cda('0x32')](wj[0x4]), Entity[_0x2cda('0x33')](wj[0x4]));
                            }
                            ;
                        });
                        continue;
                    case '71':
                        if (_0x1cf428[_0x2cda('0x24')](wj[0xd], undefined)) {
                            t13[_0x2cda('0x48')](mz13);
                        }
                        continue;
                    case '72':
                        ;
                        continue;
                    case '73':
                        ;
                        continue;
                    case '74':
                        av33[_0x2cda('0x6')](t15);
                        continue;
                    case '75':
                        av2[_0x2cda('0x6')](av29);
                        continue;
                    case '76':
                        av13 = _0x1cf428[_0x2cda('0x68')](NewView, 'LL', _0x1cf428[_0x2cda('0x66')](_0x1cf428[_0x2cda('0x69')](W), 0.3), _0x1cf428[_0x2cda('0x6a')](_0x1cf428[_0x2cda('0x69')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x1a301a) {
                            if (_0x384989[_0x2cda('0x57')](wj[0x5], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x5]), Entity[_0x2cda('0x32')](wj[0x5]), Entity[_0x2cda('0x33')](wj[0x5]));
                            }
                            ;
                        });
                        continue;
                    case '77':
                        av3 = _0x1cf428[_0x2cda('0x6b')](NewView, 'LL', _0x1cf428[_0x2cda('0x6c')](_0x1cf428[_0x2cda('0x6d')](W), 0.3), _0x1cf428[_0x2cda('0x6e')](_0x1cf428[_0x2cda('0x6f')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1a')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '78':
                        av16 = _0x1cf428[_0x2cda('0x6b')](NewView, 'LL', _0x1cf428[_0x2cda('0x6e')](_0x1cf428[_0x2cda('0x6f')](W), 0.3), _0x1cf428[_0x2cda('0x6e')](_0x1cf428[_0x2cda('0x6f')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '79':
                        t1 = _0x1cf428[_0x2cda('0x44')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '80':
                        if (_0x1cf428[_0x2cda('0x24')](ac1, null)) {
                            ac1[_0x2cda('0x21')]();
                            ac1 = null;
                        }
                        continue;
                    case '81':
                        t6 = _0x1cf428[_0x2cda('0x70')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '82':
                        t10 = _0x1cf428[_0x2cda('0x70')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '83':
                        t7 = _0x1cf428[_0x2cda('0x71')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '84':
                        av2[_0x2cda('0x6')](av24);
                        continue;
                    case '85':
                        av2 = _0x1cf428[_0x2cda('0x72')](NewView, 'LL', _0x1cf428[_0x2cda('0x73')](_0x1cf428[_0x2cda('0x74')](W), 0.3), _0x1cf428[_0x2cda('0x75')](_0x1cf428[_0x2cda('0x76')](H), 0.49), 'CT', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0xa, null);
                        continue;
                    case '86':
                        av9[_0x2cda('0x6')](t3);
                        continue;
                    case '87':
                        mz4 = Player[_0x2cda('0x28')](wj[0x4]);
                        continue;
                    case '88':
                        t15 = _0x1cf428[_0x2cda('0x77')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '89':
                        if (_0x1cf428[_0x2cda('0x78')](wj[0x3], undefined)) {
                            t3[_0x2cda('0x48')](mz3);
                        }
                        continue;
                    case '90':
                        av4 = _0x1cf428[_0x2cda('0x79')](NewView, 'LL', _0x1cf428[_0x2cda('0x75')](_0x1cf428[_0x2cda('0x7a')](W), 0.3), _0x1cf428[_0x2cda('0x75')](_0x1cf428[_0x2cda('0x7b')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '91':
                        av27 = _0x1cf428[_0x2cda('0x7c')](NewView, 'LL', _0x1cf428[_0x2cda('0x7d')](_0x1cf428[_0x2cda('0x7b')](W), 0.3), _0x1cf428[_0x2cda('0x7d')](_0x1cf428[_0x2cda('0x7e')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x7cb88c) {
                            if (_0x384989[_0x2cda('0x57')](wj[0xc], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xc]), Entity[_0x2cda('0x32')](wj[0xc]), Entity[_0x2cda('0x33')](wj[0xc]));
                            }
                            ;
                        });
                        continue;
                    case '92':
                        av2[_0x2cda('0x6')](av11);
                        continue;
                    case '93':
                        av2[_0x2cda('0x6')](av18);
                        continue;
                    case '94':
                        av2[_0x2cda('0x6')](av7);
                        continue;
                    case '95':
                        mz9 = Player[_0x2cda('0x28')](wj[0x9]);
                        continue;
                    case '96':
                        if (_0x1cf428[_0x2cda('0x78')](wj[0x9], undefined)) {
                            t9[_0x2cda('0x48')](mz9);
                        }
                        continue;
                    case '97':
                        av2[_0x2cda('0x6')](av13);
                        continue;
                    case '98':
                        mz10 = Player[_0x2cda('0x28')](wj[0xa]);
                        continue;
                    case '99':
                        av11[_0x2cda('0x6')](t4);
                        continue;
                    case _0x2cda('0x7f'):
                        av2[_0x2cda('0x6')](av31);
                        continue;
                    case _0x2cda('0x80'):
                        if (_0x1cf428[_0x2cda('0x78')](wj[0xf], undefined)) {
                            t15[_0x2cda('0x48')](mz15);
                        }
                        continue;
                    case _0x2cda('0x81'):
                        av2[_0x2cda('0x6')](av16);
                        continue;
                    case _0x2cda('0x82'):
                        av2[_0x2cda('0x6')](av22);
                        continue;
                    case _0x2cda('0x83'):
                        t13 = _0x1cf428[_0x2cda('0x77')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0x84'):
                        av2[_0x2cda('0x6')](av14);
                        continue;
                    case _0x2cda('0x85'):
                        av25 = _0x1cf428[_0x2cda('0x86')](NewView, 'LL', _0x1cf428[_0x2cda('0x7d')](_0x1cf428[_0x2cda('0x87')](W), 0.3), _0x1cf428[_0x2cda('0x88')](_0x1cf428[_0x2cda('0x89')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x1d21a9) {
                            if (_0x1cf428[_0x2cda('0x2e')](wj[0xb], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xb]), Entity[_0x2cda('0x32')](wj[0xb]), Entity[_0x2cda('0x33')](wj[0xb]));
                            }
                            ;
                        });
                        continue;
                    case _0x2cda('0x8a'):
                        av2[_0x2cda('0x6')](av12);
                        continue;
                    case _0x2cda('0x8b'):
                        ;
                        continue;
                    case _0x2cda('0x8c'):
                        av19[_0x2cda('0x6')](t8);
                        continue;
                    case _0x2cda('0x8d'):
                        av33 = _0x1cf428[_0x2cda('0x8e')](NewView, 'LL', _0x1cf428[_0x2cda('0x88')](_0x1cf428[_0x2cda('0x89')](W), 0.3), _0x1cf428[_0x2cda('0x88')](_0x1cf428[_0x2cda('0x8f')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x1381f9) {
                            if (_0x1cf428[_0x2cda('0x2e')](wj[0xf], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0xf]), Entity[_0x2cda('0x32')](wj[0xf]), Entity[_0x2cda('0x33')](wj[0xf]));
                            }
                            ;
                        });
                        continue;
                    case _0x2cda('0x90'):
                        if (_0x1cf428[_0x2cda('0x91')](wj[0xe], undefined)) {
                            t14[_0x2cda('0x48')](mz14);
                        }
                        continue;
                    case _0x2cda('0x92'):
                        if (_0x1cf428[_0x2cda('0x93')](wj[0x2], undefined)) {
                            t2[_0x2cda('0x48')](mz2);
                        }
                        continue;
                    case _0x2cda('0x94'):
                        if (_0x1cf428[_0x2cda('0x95')](wj[0xc], undefined)) {
                            t12[_0x2cda('0x48')](mz12);
                        }
                        continue;
                    case _0x2cda('0x96'):
                        t2 = _0x1cf428[_0x2cda('0x97')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0x98'):
                        av29[_0x2cda('0x6')](t13);
                        continue;
                    case _0x2cda('0x99'):
                        mz6 = Player[_0x2cda('0x28')](wj[0x6]);
                        continue;
                    case _0x2cda('0x9a'):
                        ;
                        continue;
                    case _0x2cda('0x9b'):
                        ;
                        continue;
                    case _0x2cda('0x9c'):
                        if (_0x1cf428[_0x2cda('0x9d')](wj[0x4], undefined)) {
                            t4[_0x2cda('0x48')](mz4);
                        }
                        continue;
                    case _0x2cda('0x9e'):
                        if (_0x1cf428[_0x2cda('0x9d')](wj[0x6], undefined)) {
                            t6[_0x2cda('0x48')](mz6);
                        }
                        continue;
                    case _0x2cda('0x9f'):
                        mz5 = Player[_0x2cda('0x28')](wj[0x5]);
                        continue;
                    case _0x2cda('0xa0'):
                        av21 = _0x1cf428[_0x2cda('0xa1')](NewView, 'LL', _0x1cf428[_0x2cda('0x88')](_0x1cf428[_0x2cda('0xa2')](W), 0.3), _0x1cf428[_0x2cda('0xa3')](_0x1cf428[_0x2cda('0xa2')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0xed6794) {
                            if (_0x1cf428[_0x2cda('0x62')](wj[0x9], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x9]), Entity[_0x2cda('0x32')](wj[0x9]), Entity[_0x2cda('0x33')](wj[0x9]));
                            }
                            ;
                        });
                        continue;
                    case _0x2cda('0xa4'):
                        if (_0x1cf428[_0x2cda('0xa5')](wj[0x7], undefined)) {
                            t7[_0x2cda('0x48')](mz7);
                        }
                        continue;
                    case _0x2cda('0xa6'):
                        t14 = _0x1cf428[_0x2cda('0x97')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0xa7'):
                        av2[_0x2cda('0x6')](av8);
                        continue;
                    case _0x2cda('0xa8'):
                        av8 = _0x1cf428[_0x2cda('0xa9')](NewView, 'LL', _0x1cf428[_0x2cda('0xaa')](_0x1cf428[_0x2cda('0xa2')](W), 0.3), _0x1cf428[_0x2cda('0xab')](_0x1cf428[_0x2cda('0xac')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xad'):
                        av22 = _0x1cf428[_0x2cda('0xae')](NewView, 'LL', _0x1cf428[_0x2cda('0xaf')](_0x1cf428[_0x2cda('0xac')](W), 0.3), _0x1cf428[_0x2cda('0xb0')](_0x1cf428[_0x2cda('0xb1')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xb2'):
                        av2[_0x2cda('0x6')](av30);
                        continue;
                    case _0x2cda('0xb3'):
                        av28 = _0x1cf428[_0x2cda('0xae')](NewView, 'LL', _0x1cf428[_0x2cda('0xb0')](_0x1cf428[_0x2cda('0xb4')](W), 0.3), _0x1cf428[_0x2cda('0xb5')](_0x1cf428[_0x2cda('0xb6')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xb7'):
                        if (_0x1cf428[_0x2cda('0xb8')](wj[0x5], undefined)) {
                            t5[_0x2cda('0x48')](mz5);
                        }
                        continue;
                    case _0x2cda('0xb9'):
                        av20 = _0x1cf428[_0x2cda('0xba')](NewView, 'LL', _0x1cf428[_0x2cda('0xbb')](_0x1cf428[_0x2cda('0xbc')](W), 0.3), _0x1cf428[_0x2cda('0xbd')](_0x1cf428[_0x2cda('0xbe')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xbf'):
                        av12 = _0x1cf428[_0x2cda('0xba')](NewView, 'LL', _0x1cf428[_0x2cda('0xbd')](_0x1cf428[_0x2cda('0xbe')](W), 0.3), _0x1cf428[_0x2cda('0xc0')](_0x1cf428[_0x2cda('0xc1')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xc2'):
                        av31[_0x2cda('0x6')](t14);
                        continue;
                    case _0x2cda('0xc3'):
                        av24 = _0x1cf428[_0x2cda('0xba')](NewView, 'LL', _0x1cf428[_0x2cda('0xc4')](_0x1cf428[_0x2cda('0xc1')](W), 0.3), _0x1cf428[_0x2cda('0xc4')](_0x1cf428[_0x2cda('0xc1')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xc5'):
                        av2[_0x2cda('0x6')](av26);
                        continue;
                    case _0x2cda('0xc6'):
                        av21[_0x2cda('0x6')](t9);
                        continue;
                    case _0x2cda('0xc7'):
                        t5 = _0x1cf428[_0x2cda('0xc8')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0xc9'):
                        av18 = _0x1cf428[_0x2cda('0xca')](NewView, 'LL', _0x1cf428[_0x2cda('0xcb')](_0x1cf428[_0x2cda('0xc1')](W), 0.3), _0x1cf428[_0x2cda('0xcb')](_0x1cf428[_0x2cda('0xc1')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xcc'):
                        av6 = _0x1cf428[_0x2cda('0xca')](NewView, 'LL', _0x1cf428[_0x2cda('0xcb')](_0x1cf428[_0x2cda('0xcd')](W), 0.3), _0x1cf428[_0x2cda('0xce')](_0x1cf428[_0x2cda('0xcf')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case _0x2cda('0xd0'):
                        av9 = _0x1cf428[_0x2cda('0xd1')](NewView, 'LL', _0x1cf428[_0x2cda('0xce')](_0x1cf428[_0x2cda('0xcf')](W), 0.3), _0x1cf428[_0x2cda('0xce')](_0x1cf428[_0x2cda('0xcf')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x56a334) {
                            if (_0x384989[_0x2cda('0x57')](wj[0x3], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x3]), Entity[_0x2cda('0x32')](wj[0x3]), Entity[_0x2cda('0x33')](wj[0x3]));
                            }
                            ;
                        });
                        continue;
                    case _0x2cda('0xd2'):
                        av7[_0x2cda('0x6')](t2);
                        continue;
                    case _0x2cda('0xd3'):
                        t9 = _0x1cf428[_0x2cda('0xd4')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0xd5'):
                        mz14 = Player[_0x2cda('0x28')](wj[0xe]);
                        continue;
                    case _0x2cda('0xd6'):
                        if (_0x1cf428[_0x2cda('0xb8')](wj[0x1], undefined)) {
                            t1[_0x2cda('0x48')](mz1);
                        }
                        continue;
                    case _0x2cda('0xd7'):
                        av15[_0x2cda('0x6')](t6);
                        continue;
                    case _0x2cda('0xd8'):
                        t4 = _0x1cf428[_0x2cda('0xd4')](NewText, '\x2d', 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case _0x2cda('0xd9'):
                        av2[_0x2cda('0x6')](av4);
                        continue;
                    case _0x2cda('0xda'):
                        av17 = _0x1cf428[_0x2cda('0xdb')](NewView, 'LL', _0x1cf428[_0x2cda('0xdc')](_0x1cf428[_0x2cda('0xdd')](W), 0.3), _0x1cf428[_0x2cda('0xdc')](_0x1cf428[_0x2cda('0xde')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x52d2e9) {
                            if (_0x1cf428[_0x2cda('0x62')](wj[0x7], undefined)) {
                                Entity[_0x2cda('0x2f')](Player[_0x2cda('0x30')](), Entity[_0x2cda('0x31')](wj[0x7]), Entity[_0x2cda('0x32')](wj[0x7]), Entity[_0x2cda('0x33')](wj[0x7]));
                            }
                            ;
                        });
                        continue;
                    }
                    break;
                }
            } catch (_0x2cb2b3) {
                _0x1cf428[_0x2cda('0xdf')](print, _0x2cb2b3);
            }
        }
    }));
}
;
var swi1 = 0x0;
function JsImporter() {
    var _0x5eb7d1 = {
        '\x75\x63\x69': function _0x2a6382(_0x393c15, _0x54d157) {
            return _0x393c15(_0x54d157);
        },
        '\x72\x6e\x47': function _0x523a52(_0x25e7a2, _0x245ad7, _0x35c931, _0x259cd3, _0x355f03) {
            return _0x25e7a2(_0x245ad7, _0x35c931, _0x259cd3, _0x355f03);
        },
        '\x55\x57\x64': function _0x470c2a(_0x5cac16, _0x3dd14d) {
            return _0x5cac16 == _0x3dd14d;
        },
        '\x67\x58\x56': function _0x429645(_0xffe8c9, _0xef31e9) {
            return _0xffe8c9(_0xef31e9);
        },
        '\x6e\x61\x75': function _0x459b3b(_0xff27f6, _0x1648fe) {
            return _0xff27f6 != _0x1648fe;
        },
        '\x52\x4e\x42': function _0x43339f(_0x584355, _0x399b46, _0x2ee27d, _0x458711, _0x4170b8, _0x1647e9, _0x113a6e, _0x2a6e8a, _0x355124, _0x37ec72) {
            return _0x584355(_0x399b46, _0x2ee27d, _0x458711, _0x4170b8, _0x1647e9, _0x113a6e, _0x2a6e8a, _0x355124, _0x37ec72);
        },
        '\x6a\x66\x49': function _0x358f03(_0x25b8dd, _0x9d2b1c) {
            return _0x25b8dd * _0x9d2b1c;
        },
        '\x64\x55\x41': function _0xd4d15a(_0x3059b5) {
            return _0x3059b5();
        },
        '\x49\x77\x71': function _0x50835e(_0x57c466, _0x3e641f) {
            return _0x57c466 < _0x3e641f;
        },
        '\x59\x58\x7a': function _0x3cdde5(_0x407c64, _0x172a6d, _0x55d627) {
            return _0x407c64(_0x172a6d, _0x55d627);
        },
        '\x68\x67\x58': function _0x113cbc(_0x1537e2, _0x2734c6) {
            return _0x1537e2(_0x2734c6);
        },
        '\x51\x79\x59': function _0x221281(_0x3ad184, _0x93be10, _0x164c7a, _0x55ef40, _0x4c54d1, _0x450d8f, _0xda1ca5, _0x25d308, _0x57cf33, _0x258733) {
            return _0x3ad184(_0x93be10, _0x164c7a, _0x55ef40, _0x4c54d1, _0x450d8f, _0xda1ca5, _0x25d308, _0x57cf33, _0x258733);
        },
        '\x78\x51\x44': function _0x4c470d(_0x2c6f16, _0x4e2140) {
            return _0x2c6f16 * _0x4e2140;
        },
        '\x4e\x75\x72': function _0x17554b(_0x2689bf) {
            return _0x2689bf();
        },
        '\x56\x75\x51': function _0x1533cf(_0x3c1567, _0x2a0fcc) {
            return _0x3c1567 * _0x2a0fcc;
        },
        '\x6a\x44\x45': function _0x485d8f(_0x1c7ca3) {
            return _0x1c7ca3();
        },
        '\x42\x66\x49': function _0x11bf87(_0x2c05fe, _0x313b5b, _0x4e57f0, _0x3bccf5, _0x2098e3, _0x546267, _0xedc552, _0x595fc3, _0x5e28a8, _0x14e298, _0x12ee34, _0xe58a28) {
            return _0x2c05fe(_0x313b5b, _0x4e57f0, _0x3bccf5, _0x2098e3, _0x546267, _0xedc552, _0x595fc3, _0x5e28a8, _0x14e298, _0x12ee34, _0xe58a28);
        },
        '\x79\x77\x72': function _0x41d034(_0x5b6f80, _0x27aed6) {
            return _0x5b6f80 * _0x27aed6;
        },
        '\x6d\x65\x4c': function _0x489a26(_0x161a06, _0x103ad7) {
            return _0x161a06 * _0x103ad7;
        },
        '\x62\x43\x78': function _0x3b8389(_0x51ea5d) {
            return _0x51ea5d();
        },
        '\x6e\x53\x49': function _0x301c57(_0x4da566, _0x3821cd) {
            return _0x4da566 * _0x3821cd;
        },
        '\x63\x6d\x6e': function _0x3e8e46(_0x127b31, _0x11d5d9) {
            return _0x127b31 * _0x11d5d9;
        },
        '\x72\x42\x41': function _0x42a14c(_0x51c331) {
            return _0x51c331();
        },
        '\x78\x71\x57': function _0x1cd62c(_0x3086b0) {
            return _0x3086b0();
        },
        '\x63\x6e\x5a': function _0x446fab(_0x3d95fc, _0x136ef8) {
            return _0x3d95fc * _0x136ef8;
        },
        '\x44\x56\x46': function _0x506311(_0x32e679) {
            return _0x32e679();
        },
        '\x56\x49\x4a': function _0x5d981d(_0x1e5783, _0x1648b3, _0x41d46e, _0x250a4d, _0x33e8b8, _0xfc1e0, _0x59a10f, _0x1ebf5b, _0x3ce8a5, _0x182463) {
            return _0x1e5783(_0x1648b3, _0x41d46e, _0x250a4d, _0x33e8b8, _0xfc1e0, _0x59a10f, _0x1ebf5b, _0x3ce8a5, _0x182463);
        },
        '\x52\x53\x70': function _0x45b115(_0x2603d1, _0x5c10c) {
            return _0x2603d1 * _0x5c10c;
        },
        '\x43\x49\x46': function _0x5671d9(_0x2efe6c) {
            return _0x2efe6c();
        },
        '\x5a\x62\x65': function _0xc24477(_0x3f4a95, _0x5da103) {
            return _0x3f4a95 * _0x5da103;
        },
        '\x6f\x6a\x69': function _0x168c90(_0x33817a, _0x245c0f, _0x4ad1c9, _0x2b411d, _0x4008f0) {
            return _0x33817a(_0x245c0f, _0x4ad1c9, _0x2b411d, _0x4008f0);
        },
        '\x61\x59\x66': function _0x508c2a(_0x190fc4, _0x2aeb29) {
            return _0x190fc4 + _0x2aeb29;
        },
        '\x6a\x67\x4d': function _0x2d2a02(_0x4e65b5, _0x2e2944) {
            return _0x4e65b5(_0x2e2944);
        },
        '\x6e\x62\x47': function _0xf2dcc8(_0x4cea75, _0x2ab614) {
            return _0x4cea75 + _0x2ab614;
        }
    };
    if (_0x5eb7d1[_0x2cda('0xe0')](_0x5eb7d1[_0x2cda('0xe1')](CheckFiles, _0x5eb7d1[_0x2cda('0xe2')](android['os'][_0x2cda('0xe3')][_0x2cda('0xe4')](), _0x2cda('0xe5'))), ![])) {
        new java['io'][_0x2cda('0xe6')](_0x5eb7d1[_0x2cda('0xe2')](android['os'][_0x2cda('0xe3')][_0x2cda('0xe4')](), _0x2cda('0xe5')))[_0x2cda('0xe7')]();
    }
    ;
    ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x25472d = {
                '\x66\x61\x4c': function _0x15457c(_0x1972a2, _0x206bd1) {
                    return _0x5eb7d1[_0x2cda('0xe8')](_0x1972a2, _0x206bd1);
                }
            };
            try {
                var _0x298e67 = _0x2cda('0xe9')[_0x2cda('0x5')]('\x7c'), _0x23aaa9 = 0x0;
                while (!![]) {
                    switch (_0x298e67[_0x23aaa9++]) {
                    case '0':
                        ;
                        continue;
                    case '1':
                        _0x5eb7d1[_0x2cda('0xea')](UIPlumb, av1, 0x64, 0x0, 0x96);
                        continue;
                    case '2':
                        avn0[_0x2cda('0x6')](avn1);
                        continue;
                    case '3':
                        if (_0x5eb7d1[_0x2cda('0xe0')](swi1, 0x0)) {
                            swi1++;
                            _0x5eb7d1[_0x2cda('0xeb')](TipMes, _0x2cda('0xec'));
                        }
                        continue;
                    case '4':
                        av2[_0x2cda('0x6')](av4);
                        continue;
                    case '5':
                        avn0[_0x2cda('0x6')](avn2);
                        continue;
                    case '6':
                        if (_0x5eb7d1[_0x2cda('0xed')](ac1, null)) {
                            ac1[_0x2cda('0x21')]();
                            ac1 = null;
                        }
                        continue;
                    case '7':
                        avn2 = _0x5eb7d1[_0x2cda('0xee')](NewView, 'LL', _0x5eb7d1[_0x2cda('0xef')](_0x5eb7d1[_0x2cda('0xf0')](W), 0.3), _0x5eb7d1[_0x2cda('0xef')](_0x5eb7d1[_0x2cda('0xf0')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x24dd9b) {
                            _0x25472d[_0x2cda('0xf1')](File_Select, android['os'][_0x2cda('0xe3')][_0x2cda('0xe4')]());
                        });
                        continue;
                    case '8':
                        for (a = 0x0; _0x5eb7d1[_0x2cda('0xf2')](a, P1[_0x2cda('0xf3')]); a++) {
                            av2[_0x2cda('0x6')](_0x5eb7d1[_0x2cda('0xf4')](add, P1[a][_0x2cda('0x28')](), _0x5eb7d1[_0x2cda('0xf5')](ReadData, P1[a])));
                        }
                        continue;
                    case '9':
                        avn1 = _0x5eb7d1[_0x2cda('0xf6')](NewView, 'LL', _0x5eb7d1[_0x2cda('0xf7')](_0x5eb7d1[_0x2cda('0xf8')](W), 0.3), _0x5eb7d1[_0x2cda('0xf7')](_0x5eb7d1[_0x2cda('0xf8')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0x0, null);
                        continue;
                    case '10':
                        av1 = _0x5eb7d1[_0x2cda('0xf6')](NewView, 'SV', _0x5eb7d1[_0x2cda('0xf7')](_0x5eb7d1[_0x2cda('0xf8')](W), 0.3), _0x5eb7d1[_0x2cda('0xf9')](_0x5eb7d1[_0x2cda('0xfa')](H), 0.5), null, null, 0x2, null, null, null);
                        continue;
                    case '11':
                        ac1 = _0x5eb7d1[_0x2cda('0xfb')](NewCDV, 0x2, null, 0x0, av1, _0x5eb7d1[_0x2cda('0xfc')](_0x5eb7d1[_0x2cda('0xfa')](W), 0.3), _0x5eb7d1[_0x2cda('0xfd')](_0x5eb7d1[_0x2cda('0xfe')](H), 0.5), ![], !![], 'RB', _0x5eb7d1[_0x2cda('0xff')](_0x5eb7d1[_0x2cda('0xfe')](W), 0.08), 0x0);
                        continue;
                    case '12':
                        avn0 = _0x5eb7d1[_0x2cda('0xf6')](NewView, 'LL', _0x5eb7d1[_0x2cda('0xff')](_0x5eb7d1[_0x2cda('0xfe')](W), 0.3), _0x5eb7d1[_0x2cda('0xff')](_0x5eb7d1[_0x2cda('0xfe')](H), 0.12), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    case '13':
                        av2 = _0x5eb7d1[_0x2cda('0xf6')](NewView, 'LL', _0x5eb7d1[_0x2cda('0x100')](_0x5eb7d1[_0x2cda('0x101')](W), 0.3), _0x5eb7d1[_0x2cda('0x100')](_0x5eb7d1[_0x2cda('0x102')](H), 0.5), 'CT', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], 0xa, null);
                        continue;
                    case '14':
                        av2[_0x2cda('0x6')](avn0);
                        continue;
                    case '15':
                        av3 = _0x5eb7d1[_0x2cda('0xf6')](NewView, 'LL', _0x5eb7d1[_0x2cda('0x100')](_0x5eb7d1[_0x2cda('0x102')](W), 0.3), _0x5eb7d1[_0x2cda('0x103')](_0x5eb7d1[_0x2cda('0x104')](H), 0.05), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1a')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '16':
                        avn2[_0x2cda('0x6')](avn3);
                        continue;
                    case '17':
                        ;
                        continue;
                    case '18':
                        ;
                        continue;
                    case '19':
                        av4 = _0x5eb7d1[_0x2cda('0x105')](NewView, 'LL', _0x5eb7d1[_0x2cda('0x106')](_0x5eb7d1[_0x2cda('0x107')](W), 0.3), _0x5eb7d1[_0x2cda('0x108')](_0x5eb7d1[_0x2cda('0x107')](H), 0.02), 'CC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x1d')
                        ], [
                            0x0,
                            0x0,
                            0xa,
                            0xa
                        ], null);
                        continue;
                    case '20':
                        av3[_0x2cda('0x6')](cv1);
                        continue;
                    case '21':
                        cv1 = _0x5eb7d1[_0x2cda('0x109')](NewText, _0x2cda('0x10a'), 'CC', 0xa, _0x2cda('0x16'));
                        continue;
                    case '22':
                        P1 = new java['io'][_0x2cda('0xe6')](_0x5eb7d1[_0x2cda('0x10b')](android['os'][_0x2cda('0xe3')][_0x2cda('0xe4')](), _0x2cda('0xe5')))[_0x2cda('0x10c')]();
                        continue;
                    case '23':
                        avn3 = _0x5eb7d1[_0x2cda('0x109')](NewText, _0x2cda('0x10d'), 'CC', 0xe, _0x2cda('0x16'));
                        continue;
                    case '24':
                        av1[_0x2cda('0x6')](av2);
                        continue;
                    case '25':
                        av2[_0x2cda('0x6')](av3);
                        continue;
                    }
                    break;
                }
            } catch (_0x4b81f8) {
                _0x5eb7d1[_0x2cda('0xe1')](print, _0x4b81f8);
            }
        }
    }));
}
;
function add(_0x5180ac, _0xbbfbaa) {
    var _0x27a330 = {
        '\x72\x58\x6d': function _0x18111d(_0x5ade94, _0x184f9c, _0x1931e2, _0x278589, _0x3da8a7, _0x5bbfbf, _0x183aca, _0x17ae5c, _0x594b16, _0x17dad7) {
            return _0x5ade94(_0x184f9c, _0x1931e2, _0x278589, _0x3da8a7, _0x5bbfbf, _0x183aca, _0x17ae5c, _0x594b16, _0x17dad7);
        },
        '\x4c\x66\x64': function _0x440816(_0x4e4b7b, _0x4e8378) {
            return _0x4e4b7b * _0x4e8378;
        },
        '\x6c\x6a\x64': function _0x59eb83(_0x59dd9e) {
            return _0x59dd9e();
        },
        '\x70\x51\x44': function _0x4f8f98(_0xda0461, _0x179e3c) {
            return _0xda0461 * _0x179e3c;
        },
        '\x78\x61\x78': function _0x27a117(_0x6376e3) {
            return _0x6376e3();
        },
        '\x43\x53\x4a': function _0x4902d2(_0x1d1565, _0xcb32d1) {
            return _0x1d1565(_0xcb32d1);
        },
        '\x66\x54\x7a': function _0x370e91(_0x29021d, _0x3be493, _0x3ac948, _0x4cfd69, _0x15ec36) {
            return _0x29021d(_0x3be493, _0x3ac948, _0x4cfd69, _0x15ec36);
        },
        '\x6e\x4e\x5a': function _0x20a11b(_0xd9344a, _0x3200e0, _0x5e0e33, _0x4d88d3, _0x590fbd, _0x4da769, _0x431229, _0x22b760, _0x285f6b, _0x597dfb) {
            return _0xd9344a(_0x3200e0, _0x5e0e33, _0x4d88d3, _0x590fbd, _0x4da769, _0x431229, _0x22b760, _0x285f6b, _0x597dfb);
        },
        '\x42\x45\x55': function _0x5aeed8(_0x23d499, _0x5c8bdd) {
            return _0x23d499 * _0x5c8bdd;
        },
        '\x73\x42\x63': function _0x57f659(_0xc17e89) {
            return _0xc17e89();
        },
        '\x66\x47\x4d': function _0x14a80d(_0x2efdde, _0x5c9ac0) {
            return _0x2efdde * _0x5c9ac0;
        }
    };
    var _0x410a5e = _0x2cda('0x10e')[_0x2cda('0x5')]('\x7c'), _0xd28c6 = 0x0;
    while (!![]) {
        switch (_0x410a5e[_0xd28c6++]) {
        case '0':
            avn2 = _0x27a330[_0x2cda('0x10f')](NewView, 'LL', _0x27a330[_0x2cda('0x110')](_0x27a330[_0x2cda('0x111')](W), 0.3), _0x27a330[_0x2cda('0x112')](_0x27a330[_0x2cda('0x113')](H), 0.1), 'CC', 0x1, 0x0, _0x2cda('0x2d'), 0xa, function (_0x100ed5) {
                _0x141812[_0x2cda('0x114')](load, _0xbbfbaa);
            });
            continue;
        case '1':
            var _0x141812 = {
                '\x4b\x4a\x47': function _0x1841b5(_0x490a35, _0xe7e27c) {
                    return _0x27a330[_0x2cda('0x115')](_0x490a35, _0xe7e27c);
                }
            };
            continue;
        case '2':
            avn0[_0x2cda('0x6')](avn2);
            continue;
        case '3':
            avn0[_0x2cda('0x6')](avn1);
            continue;
        case '4':
            avn2[_0x2cda('0x6')](avn3);
            continue;
        case '5':
            avn3 = _0x27a330[_0x2cda('0x116')](NewText, _0x5180ac, 'CC', 0xe, _0x2cda('0x16'));
            continue;
        case '6':
            return avn0;
            continue;
        case '7':
            avn0 = _0x27a330[_0x2cda('0x117')](NewView, 'LL', _0x27a330[_0x2cda('0x112')](_0x27a330[_0x2cda('0x113')](W), 0.3), _0x27a330[_0x2cda('0x118')](_0x27a330[_0x2cda('0x119')](H), 0.12), 'CC', 0x1, 0x2, null, null, null);
            continue;
        case '8':
            avn1 = _0x27a330[_0x2cda('0x117')](NewView, 'LL', _0x27a330[_0x2cda('0x118')](_0x27a330[_0x2cda('0x119')](W), 0.3), _0x27a330[_0x2cda('0x11a')](_0x27a330[_0x2cda('0x119')](H), 0.02), 'CC', 0x1, 0x1, [
                null,
                _0x2cda('0x1d')
            ], 0x0, null);
            continue;
        }
        break;
    }
}
;
var l1;
function load(_0x525855) {
    var _0x1bacda = {
        '\x52\x4b\x49': function _0x46ef4d(_0x5291e5, _0x2b1d76, _0xdb64a9, _0x11004a, _0x5646c9) {
            return _0x5291e5(_0x2b1d76, _0xdb64a9, _0x11004a, _0x5646c9);
        },
        '\x79\x42\x53': function _0x6c6024(_0x38e00f, _0x5a1a8f) {
            return _0x38e00f(_0x5a1a8f);
        },
        '\x68\x5a\x73': function _0x963bf2(_0x1157ae, _0x3901b3) {
            return _0x1157ae(_0x3901b3);
        },
        '\x50\x4f\x47': function _0x303d5f(_0x4b7311, _0x58ed57) {
            return _0x4b7311 != _0x58ed57;
        },
        '\x44\x51\x79': function _0x3e9987(_0x2d898b, _0x160ade) {
            return _0x2d898b != _0x160ade;
        },
        '\x66\x42\x42': function _0x27c9df(_0x238342, _0x51643, _0x501124, _0x4ba563, _0x45077f, _0x38d640, _0xd9247b, _0x4a9521, _0x57cc2b, _0xb26cc4) {
            return _0x238342(_0x51643, _0x501124, _0x4ba563, _0x45077f, _0x38d640, _0xd9247b, _0x4a9521, _0x57cc2b, _0xb26cc4);
        },
        '\x59\x76\x55': function _0x55e67a(_0x2f6fbb, _0x27e976) {
            return _0x2f6fbb * _0x27e976;
        },
        '\x49\x42\x7a': function _0xf02312(_0x5e2ce1) {
            return _0x5e2ce1();
        },
        '\x4e\x72\x71': function _0x1aaefc(_0xa58311, _0x475757) {
            return _0xa58311 * _0x475757;
        },
        '\x58\x67\x43': function _0x4b2c20(_0x1d3971) {
            return _0x1d3971();
        },
        '\x61\x54\x42': function _0x239eae(_0x56829c, _0x293daf, _0x3559c8, _0x17464c, _0xc2e84a) {
            return _0x56829c(_0x293daf, _0x3559c8, _0x17464c, _0xc2e84a);
        },
        '\x61\x41\x68': function _0x5582a1(_0x35d766, _0x185a3e, _0xc60951, _0xe78aed, _0x20972c) {
            return _0x35d766(_0x185a3e, _0xc60951, _0xe78aed, _0x20972c);
        },
        '\x70\x63\x55': function _0x1880ab(_0x42621d) {
            return _0x42621d();
        },
        '\x4a\x6a\x5a': function _0x521820(_0x550f11, _0x278569) {
            return _0x550f11 * _0x278569;
        },
        '\x47\x41\x5a': function _0x2cab65(_0x42d2f) {
            return _0x42d2f();
        },
        '\x5a\x45\x6a': function _0x25050c(_0xe6e8e3, _0x28144d, _0x15a18f, _0x3ad501, _0x3568d0, _0x13d154, _0x228402, _0xc4515e, _0xa197dd, _0x2c0a0d) {
            return _0xe6e8e3(_0x28144d, _0x15a18f, _0x3ad501, _0x3568d0, _0x13d154, _0x228402, _0xc4515e, _0xa197dd, _0x2c0a0d);
        },
        '\x75\x4c\x44': function _0x3090e7(_0x37a4dd, _0x4f9421, _0x4046cd, _0x5c2adf, _0x1805d1, _0x2d5a20, _0x342ec6, _0x4ee1bd, _0x48ec96, _0x2842c1) {
            return _0x37a4dd(_0x4f9421, _0x4046cd, _0x5c2adf, _0x1805d1, _0x2d5a20, _0x342ec6, _0x4ee1bd, _0x48ec96, _0x2842c1);
        },
        '\x45\x59\x47': function _0x2b345d(_0xf70076, _0x317bc9) {
            return _0xf70076 * _0x317bc9;
        },
        '\x55\x54\x47': function _0xdc03b5(_0x187825) {
            return _0x187825();
        },
        '\x67\x75\x6c': function _0x48a7d7(_0x4e93d7, _0x1fccbd) {
            return _0x4e93d7 * _0x1fccbd;
        },
        '\x46\x48\x43': function _0x41eeb8(_0x14b102) {
            return _0x14b102();
        },
        '\x65\x70\x4b': function _0x218955(_0x46b007, _0x4d6b79, _0x462e5b, _0x52d6d2, _0x56564e, _0x555b99, _0x9a0a19, _0x31de5d, _0x34a669, _0x553182, _0x40a2b2, _0x1ca532) {
            return _0x46b007(_0x4d6b79, _0x462e5b, _0x52d6d2, _0x56564e, _0x555b99, _0x9a0a19, _0x31de5d, _0x34a669, _0x553182, _0x40a2b2, _0x1ca532);
        },
        '\x73\x73\x6c': function _0x35cfd8(_0x2d6a1f, _0x3f8938, _0x264d80, _0x241cec, _0xcb54b1, _0x340b93, _0x4378ed, _0x4ab19a, _0x13d78b, _0x57404a) {
            return _0x2d6a1f(_0x3f8938, _0x264d80, _0x241cec, _0xcb54b1, _0x340b93, _0x4378ed, _0x4ab19a, _0x13d78b, _0x57404a);
        },
        '\x4d\x69\x6d': function _0x1c65ca(_0x5db91a, _0x542514) {
            return _0x5db91a * _0x542514;
        },
        '\x6d\x46\x4d': function _0x41d267(_0x493af8) {
            return _0x493af8();
        },
        '\x62\x77\x59': function _0x53e1c2(_0x1f326e, _0x116ea1, _0x2450c0, _0x2af5bc, _0x3f6df0) {
            return _0x1f326e(_0x116ea1, _0x2450c0, _0x2af5bc, _0x3f6df0);
        },
        '\x54\x6e\x68': function _0xfb4d0c(_0x44c7e2, _0x34bd45) {
            return _0x44c7e2 + _0x34bd45;
        },
        '\x68\x56\x52': function _0x53a7c6(_0x389757, _0x449cc4) {
            return _0x389757 * _0x449cc4;
        },
        '\x43\x6a\x67': function _0x23282e(_0x2b1957, _0x37a29a, _0x39b265, _0x16d74b, _0x241646, _0x97b3d, _0x145415, _0x361226, _0x7ed303, _0x53d287) {
            return _0x2b1957(_0x37a29a, _0x39b265, _0x16d74b, _0x241646, _0x97b3d, _0x145415, _0x361226, _0x7ed303, _0x53d287);
        },
        '\x67\x5a\x72': function _0x3f9a0b(_0x2ed6c8, _0x58c537) {
            return _0x2ed6c8(_0x58c537);
        }
    };
    ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
        '\x72\x75\x6e': function () {
            var _0x1041a2 = {
                '\x6c\x71\x69': function _0x297ff5(_0x16196c, _0x3a172f) {
                    return _0x1bacda[_0x2cda('0x11b')](_0x16196c, _0x3a172f);
                }
            };
            try {
                var _0x146a5b = _0x2cda('0x11c')[_0x2cda('0x5')]('\x7c'), _0x8470e5 = 0x0;
                while (!![]) {
                    switch (_0x146a5b[_0x8470e5++]) {
                    case '0':
                        if (_0x1bacda[_0x2cda('0x11d')](l1, null)) {
                            l1[_0x2cda('0x21')]();
                            l1 = null;
                        }
                        continue;
                    case '1':
                        d2 = _0x1bacda[_0x2cda('0x11e')](NewView, 'LL', _0x1bacda[_0x2cda('0x11f')](_0x1bacda[_0x2cda('0x120')](H), 0.5), _0x1bacda[_0x2cda('0x121')](_0x1bacda[_0x2cda('0x122')](H), 0.02), 'CC', 0x0, 0x2, null, null, null);
                        continue;
                    case '2':
                        ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
                            '\x72\x75\x6e': function () {
                                new android['os'][_0x2cda('0x123')]()[_0x2cda('0x124')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
                                    '\x72\x75\x6e': function () {
                                        if (_0x1041a2[_0x2cda('0x125')](l1, null)) {
                                            l1[_0x2cda('0x21')]();
                                            l1 = null;
                                        }
                                        ;
                                    }
                                }), _0x2f8193);
                            }
                        }));
                        continue;
                    case '3':
                        d1[_0x2cda('0x6')](d2);
                        continue;
                    case '4':
                        d1[_0x2cda('0x6')](d6);
                        continue;
                    case '5':
                        d1[_0x2cda('0x6')](d5);
                        continue;
                    case '6':
                        _0x1bacda[_0x2cda('0x126')](UIFadein, d1, 0x0, 0x64, 0xc8);
                        continue;
                    case '7':
                        d6 = _0x1bacda[_0x2cda('0x127')](NewText, _0x2cda('0x128'), 'CC', 0xe, _0x2cda('0x129'));
                        continue;
                    case '8':
                        d5 = _0x1bacda[_0x2cda('0x11e')](NewView, 'LL', _0x1bacda[_0x2cda('0x121')](_0x1bacda[_0x2cda('0x12a')](H), 0.49), _0x1bacda[_0x2cda('0x12b')](_0x1bacda[_0x2cda('0x12c')](H), 0.01), 'CC', 0x1, 0x1, [
                            'TB',
                            _0x2cda('0x12d'),
                            _0x2cda('0x12e')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '9':
                        new android['os'][_0x2cda('0x123')]()[_0x2cda('0x124')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
                            '\x72\x75\x6e': function () {
                                var _0x1c0bd6 = {
                                    '\x4c\x76\x57': function _0x261af4(_0x1b6441, _0x1606b4, _0xd8dcb5, _0x1366bc, _0x41be78) {
                                        return _0x1bacda[_0x2cda('0x12f')](_0x1b6441, _0x1606b4, _0xd8dcb5, _0x1366bc, _0x41be78);
                                    },
                                    '\x4f\x44\x78': function _0x1ff3a9(_0x128091, _0x4b6513) {
                                        return _0x1bacda[_0x2cda('0x130')](_0x128091, _0x4b6513);
                                    }
                                };
                                try {
                                    _0x1bacda[_0x2cda('0x131')](eval, _0x525855);
                                } catch (_0x267ec0) {
                                    ctx[_0x2cda('0x0')](new java[_0x2cda('0x1')][_0x2cda('0x2')]({
                                        '\x72\x75\x6e': function () {
                                            _0x1c0bd6[_0x2cda('0xa1')](UILevel, d3$, 0x0, 0x0, 0x0);
                                            d3[_0x2cda('0x132')](d3$);
                                            d6[_0x2cda('0x48')](_0x2cda('0x133'));
                                            _0x1c0bd6[_0x2cda('0x134')](TipMes, _0x2cda('0x135'));
                                        }
                                    }));
                                }
                                ;
                            }
                        }), 0x1f4);
                        continue;
                    case '10':
                        d4 = _0x1bacda[_0x2cda('0x136')](NewView, 'LL', _0x1bacda[_0x2cda('0x12b')](_0x1bacda[_0x2cda('0x12c')](H), 0.01), _0x1bacda[_0x2cda('0x12b')](_0x1bacda[_0x2cda('0x12c')](H), 0.02), 'CC', 0x1, 0x1, [
                            'LR',
                            _0x2cda('0x12d'),
                            _0x2cda('0x12e')
                        ], [
                            0xa,
                            0x0,
                            0x0,
                            0xa
                        ], null);
                        continue;
                    case '11':
                        d3$ = _0x1bacda[_0x2cda('0x137')](NewView, 'LL', _0x1bacda[_0x2cda('0x138')](_0x1bacda[_0x2cda('0x139')](H), 0.49), _0x1bacda[_0x2cda('0x13a')](_0x1bacda[_0x2cda('0x13b')](H), 0.02), 'CC', 0x1, 0x1, [
                            'RT',
                            _0x2cda('0x13c'),
                            _0x2cda('0x13d')
                        ], 0xa, null);
                        continue;
                    case '12':
                        d2[_0x2cda('0x6')](d4);
                        continue;
                    case '13':
                        ;
                        continue;
                    case '14':
                        l1 = _0x1bacda[_0x2cda('0x13e')](NewCDV, 0x0, _0x2cda('0x13f'), 0x0, d1, -0x1, -0x1, ![], !![], 'CT', 0x0, 0x0);
                        continue;
                    case '15':
                        d3 = _0x1bacda[_0x2cda('0x140')](NewView, 'LL', _0x1bacda[_0x2cda('0x141')](_0x1bacda[_0x2cda('0x13b')](H), 0.49), _0x1bacda[_0x2cda('0x141')](_0x1bacda[_0x2cda('0x142')](H), 0.02), 'LC', 0x1, 0x1, [
                            null,
                            _0x2cda('0x143')
                        ], 0xa, null);
                        continue;
                    case '16':
                        d3[_0x2cda('0x6')](d3$);
                        continue;
                    case '17':
                        _0x1bacda[_0x2cda('0x144')](UILevel, d3$, -0x64, 0x0, _0x2f8193);
                        continue;
                    case '18':
                        d2[_0x2cda('0x6')](d3);
                        continue;
                    case '19':
                        var _0x2f8193 = _0x1bacda[_0x2cda('0x145')](0x1f4, Math[_0x2cda('0x146')](_0x1bacda[_0x2cda('0x147')](Math[_0x2cda('0x148')](), 0x9c4)));
                        continue;
                    case '20':
                        d1 = _0x1bacda[_0x2cda('0x149')](NewView, 'LL', -0x1, -0x1, 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    }
                    break;
                }
            } catch (_0x225856) {
                _0x1bacda[_0x2cda('0x14a')](print, _0x225856);
            }
        }
    }));
}
;


var _0x5ece = [
    'QVh4',
    'SFAgdWkgZXJyCg\x3d\x3d',
    'UnNI',
    'aGFwcHlWaWxsYWdlcg\x3d\x3d',
    'VGhyZWFk',
    'MHwyfDR8NXw2fDF8Mw\x3d\x3d',
    'b1Bp',
    'UFlj',
    'W\x2bW3suW8gOWQr10\x3d',
    'V3Z3',
    'TmxB',
    'Z2V0WA\x3d\x3d',
    'Z2V0WQ\x3d\x3d',
    'Z2V0Wg\x3d\x3d',
    'Vmlr',
    'bHRm',
    'aWN0',
    'bGVuZ3Ro',
    'YWRkUGFydGljbGU\x3d',
    'bm90ZQ\x3d\x3d',
    'OHwxMHwxMnw3fDZ8MTR8M3wxfDR8OXwyfDB8MTN8NXwxMQ\x3d\x3d',
    'bVFQ',
    'VGxE',
    'WUNQ',
    'UVhv',
    'ZGdV',
    'bU9x',
    'WWFR',
    'SUhM',
    'Y29z',
    'S3FO',
    'V3BG',
    'eFVQ',
    'Ym9H',
    'eXFE',
    'U254',
    'a1Vq',
    'VGxM',
    'c2lu',
    'd0ZF',
    'bmFt',
    'b2NK',
    'U2Vx',
    'Y01I',
    'TEp1',
    'UFBo',
    'SGFuZGxlcg\x3d\x3d',
    'cG9zdERlbGF5ZWQ\x3d',
    'UFlq',
    'MHw1fDJ8M3w0fDE\x3d',
    'ZHJpcExhdmE\x3d',
    'bXFM',
    'eFds',
    'Nnw0fDF8M3w1fDB8Mnw3',
    'bklz',
    'VVBr',
    'QWtC',
    'WGhK',
    'cmdj',
    'd1Nw',
    'WXpI',
    'bXR4',
    'Wmty',
    'akVV',
    'aEty',
    'QWt0',
    'UnlS',
    'Qmpa',
    'S3di',
    'RFBi',
    'bFlV',
    'TE1J',
    'bHRq',
    'VFJs',
    'ZUpG',
    'VERz',
    'SEVF',
    'Z0xj',
    'cEFU',
    'QmFo',
    'T3FT',
    'cnFo',
    'dXpw',
    'bmt4',
    'Z1Rv',
    'ekpy',
    'cW5y',
    'Rmdo',
    'VERv',
    'Tkts',
    'cHdH',
    'TlJV',
    'YXJn',
    'ZGpq',
    'TXJ4',
    'c3FydA\x3d\x3d',
    'S3Bq',
    'RFRF',
    'U1V4',
    'bGJy',
    'ZXdE',
    'WExz',
    'Rmtq',
    'U0ZX',
    'M3wyfDR8NXwxfDA\x3d',
    'dXZW',
    'ZmxhbWU\x3d',
    'UFNL',
    'T29O',
    'Y2xvdWQ\x3d',
    'TVVD',
    'c2FH',
    'cmFuZG9t',
    'U3d6',
    'b2l1',
    'TklQ',
    'QXJw',
    'S0lG',
    'TFJF',
    'WUx2',
    'QW1h',
    'aEhC',
    'Z2V0VmVsWQ\x3d\x3d',
    'dG9GaXhlZA\x3d\x3d',
    'Vmps',
    'Ym53',
    'c2V0UG9zaXRpb24\x3d',
    'Z2V0RW50aXR5',
    'YWdO',
    'a1FF',
    'Z2V0VGlsZQ\x3d\x3d',
    'Q1Rl',
    'QVJ3',
    'VFdR',
    'TG53',
    'U0dQ',
    'M3w0fDB8Mnwx',
    'all2',
    'd0ZV',
    'TnpR',
    'T2RK',
    'c2V0VmVsWQ\x3d\x3d',
    'eW5x',
    'd1Fm',
    'a0d0',
    'SVRq',
    'ZVFI',
    'T1VX',
    'Z2V0TWF4SGVhbHRo',
    'Z2V0UG9pbnRlZEVudGl0eQ\x3d\x3d',
    'Z2V0SGVhbHRo',
    'QUtS',
    'ZGlzbWlzcw\x3d\x3d',
    'ZkVx',
    'c2V0TGF5b3V0UGFyYW1z',
    'd2lkZ2V0',
    'TGluZWFyTGF5b3V0',
    'TGF5b3V0UGFyYW1z',
    'S3dP',
    'bXd2',
    'U1dk',
    'enlE',
    'a2d6',
    'Z1VV',
    'a0hH',
    'blJp',
    'amF2YS5sYW5nLlRocmVhZCBlcnI6Cg\x3d\x3d',
    'c2xlZXA\x3d',
    'c3RhcnQ\x3d',
    'cnVuT25VaVRocmVhZA\x3d\x3d',
    'bGFuZw\x3d\x3d',
    'UnVubmFibGU\x3d',
    'MTF8MTB8Mnw1fDd8OXwzfDF8MHw0fDh8Ng\x3d\x3d',
    'c3BsaXQ\x3d',
    'YWRkVmlldw\x3d\x3d',
    'RWtP',
    'U3Rh',
    'akNT',
    'aUt0',
    'Izk2ZmZkOGYx',
    'Izk2ZmZmNWUy',
    'TG1v',
    'b2Fh',
    'aGFT',
    'Izk2MDBmZmNj',
    'Izk2MDBmZmVl',
    'ZUdG',
    'UUFP',
    'WVFS',
    'cGp1',
    'T2dy',
    'UGFk',
    'RFpt',
    'IzVhOTY5Njk2',
    'IzEwOTY5Njk2',
    'eENa',
    'SG14',
    'QkpI',
    'UmJ3',
    'eEtk',
    'ZXV6',
    'cENX',
    'SmtK',
    'bVlo'
];
(function (_0x3ed5d8, _0x3b07f4) {
    var _0x426e97 = function (_0x576aac) {
        while (--_0x576aac) {
            _0x3ed5d8['\x70\x75\x73\x68'](_0x3ed5d8['\x73\x68\x69\x66\x74']());
        }
    };
    _0x426e97(++_0x3b07f4);
}(_0x5ece, 0x175));
var _0xe5ec = function (_0xcb37b8, _0x34699d) {
    _0xcb37b8 = _0xcb37b8 - 0x0;
    var _0x22536c = _0x5ece[_0xcb37b8];
    if (_0xe5ec['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] === undefined) {
        (function () {
            var _0x53df85 = Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20' + '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29' + '\x29\x3b');
            var _0x2874cb = _0x53df85();
            var _0xbcb215 = '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';
            _0x2874cb['\x61\x74\x6f\x62'] || (_0x2874cb['\x61\x74\x6f\x62'] = function (_0x1407c2) {
                var _0x3423dc = String(_0x1407c2)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/, '');
                for (var _0x572171 = 0x0, _0x397cd1, _0x536bba, _0x3ab455 = 0x0, _0x377afb = ''; _0x536bba = _0x3423dc['\x63\x68\x61\x72\x41\x74'](_0x3ab455++); ~_0x536bba && (_0x397cd1 = _0x572171 % 0x4 ? _0x397cd1 * 0x40 + _0x536bba : _0x536bba, _0x572171++ % 0x4) ? _0x377afb += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff & _0x397cd1 >> (-0x2 * _0x572171 & 0x6)) : 0x0) {
                    _0x536bba = _0xbcb215['\x69\x6e\x64\x65\x78\x4f\x66'](_0x536bba);
                }
                return _0x377afb;
            });
        }());
        _0xe5ec['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'] = function (_0x34d06a) {
            var _0x566666 = atob(_0x34d06a);
            var _0x773dc3 = [];
            for (var _0x6e3573 = 0x0, _0x23c4f4 = _0x566666['\x6c\x65\x6e\x67\x74\x68']; _0x6e3573 < _0x23c4f4; _0x6e3573++) {
                _0x773dc3 += '\x25' + ('\x30\x30' + _0x566666['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x6e3573)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);
            }
            return decodeURIComponent(_0x773dc3);
        };
        _0xe5ec['\x64\x61\x74\x61'] = {};
        _0xe5ec['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64'] = !![];
    }
    if (_0xe5ec['\x64\x61\x74\x61'][_0xcb37b8] === undefined) {
        _0x22536c = _0xe5ec['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x22536c);
        _0xe5ec['\x64\x61\x74\x61'][_0xcb37b8] = _0x22536c;
    } else {
        _0x22536c = _0xe5ec['\x64\x61\x74\x61'][_0xcb37b8];
    }
    return _0x22536c;
};
var hpc1;
var hp3$;
function ShowHP() {
    var _0x32b81e = {
        '\x45\x6b\x4f': function _0x439653(_0x23413e, _0x47be18, _0x258cf9, _0x3e5b58, _0x2b3965, _0x9dabdf, _0x2522fe, _0x959fd4, _0x21432f, _0x5800aa) {
            return _0x23413e(_0x47be18, _0x258cf9, _0x3e5b58, _0x2b3965, _0x9dabdf, _0x2522fe, _0x959fd4, _0x21432f, _0x5800aa);
        },
        '\x53\x74\x61': function _0x487798(_0x4d17c4, _0x264395) {
            return _0x4d17c4 * _0x264395;
        },
        '\x6a\x43\x53': function _0x263f84(_0x3d6ad6) {
            return _0x3d6ad6();
        },
        '\x69\x4b\x74': function _0x134c5a(_0x20a664, _0x3a5529) {
            return _0x20a664 * _0x3a5529;
        },
        '\x4c\x6d\x6f': function _0x395fef(_0x4e9c4d, _0x4d55de) {
            return _0x4e9c4d * _0x4d55de;
        },
        '\x6f\x61\x61': function _0x236075(_0x785640, _0x2cdf92) {
            return _0x785640 * _0x2cdf92;
        },
        '\x68\x61\x53': function _0x48f9e0(_0x2b2523) {
            return _0x2b2523();
        },
        '\x65\x47\x46': function _0x1dc75d(_0x3ce737, _0x3fa665, _0x2e3766, _0x2c2691, _0x10b6cb, _0x3d80cd, _0x298004, _0x36585e, _0x5ae1f0, _0x17b781, _0x4fb0b9, _0x189090) {
            return _0x3ce737(_0x3fa665, _0x2e3766, _0x2c2691, _0x10b6cb, _0x3d80cd, _0x298004, _0x36585e, _0x5ae1f0, _0x17b781, _0x4fb0b9, _0x189090);
        },
        '\x51\x41\x4f': function _0x4b5123(_0x2c4f7d, _0x372df9) {
            return _0x2c4f7d * _0x372df9;
        },
        '\x59\x51\x52': function _0x1e3a60(_0x3908c0) {
            return _0x3908c0();
        },
        '\x70\x6a\x75': function _0x3a6278(_0x2a54a3, _0x515389) {
            return _0x2a54a3 * _0x515389;
        },
        '\x4f\x67\x72': function _0x234e43(_0x8e1705) {
            return _0x8e1705();
        },
        '\x50\x61\x64': function _0x454302(_0x23cc34, _0x26ac22) {
            return _0x23cc34 * _0x26ac22;
        },
        '\x44\x5a\x6d': function _0x5150f7(_0x1d8e55) {
            return _0x1d8e55();
        },
        '\x78\x43\x5a': function _0x2d06a5(_0x11be07, _0x5005be, _0x281e48, _0x4c518, _0x53a90a, _0x22d2e0, _0x6aac26, _0x191622, _0x732a43, _0x37859b) {
            return _0x11be07(_0x5005be, _0x281e48, _0x4c518, _0x53a90a, _0x22d2e0, _0x6aac26, _0x191622, _0x732a43, _0x37859b);
        },
        '\x48\x6d\x78': function _0x587d40(_0x301227, _0x179db6, _0x5ea18a, _0x50b2d5, _0x4c30f0, _0x12f912, _0x521a5c, _0x52413e, _0x4c5dd4, _0x2ecfb4) {
            return _0x301227(_0x179db6, _0x5ea18a, _0x50b2d5, _0x4c30f0, _0x12f912, _0x521a5c, _0x52413e, _0x4c5dd4, _0x2ecfb4);
        },
        '\x42\x4a\x48': function _0x177346(_0x274698, _0x4d242b) {
            return _0x274698 * _0x4d242b;
        },
        '\x52\x62\x77': function _0x3d7278(_0x722c01) {
            return _0x722c01();
        },
        '\x78\x4b\x64': function _0x335cd2(_0x56fd0f, _0x1ea915, _0x1c785f, _0x573a77, _0x312836, _0xc52d73, _0x707d7a, _0x2f142f, _0x1375e1, _0x4214e0) {
            return _0x56fd0f(_0x1ea915, _0x1c785f, _0x573a77, _0x312836, _0xc52d73, _0x707d7a, _0x2f142f, _0x1375e1, _0x4214e0);
        },
        '\x65\x75\x7a': function _0x288f2a(_0x4ad780, _0x192e86) {
            return _0x4ad780 * _0x192e86;
        },
        '\x70\x43\x57': function _0x4854c9(_0x2b4ee4, _0x36a8da) {
            return _0x2b4ee4 * _0x36a8da;
        },
        '\x4a\x6b\x4a': function _0xde0d32(_0xd0cf91) {
            return _0xd0cf91();
        },
        '\x6d\x59\x68': function _0x19103e(_0x3e0fbe, _0x428cba) {
            return _0x3e0fbe(_0x428cba);
        },
        '\x41\x58\x78': function _0x5b6003(_0x2e6b21, _0x33a760) {
            return _0x2e6b21 + _0x33a760;
        },
        '\x52\x73\x48': function _0x55804a(_0x148da8, _0xa1dfa4, _0x10c204, _0x9b23e1, _0x3d5378) {
            return _0x148da8(_0xa1dfa4, _0x10c204, _0x9b23e1, _0x3d5378);
        }
    };
    ctx[_0xe5ec('0x0')](new java[_0xe5ec('0x1')][_0xe5ec('0x2')]({
        '\x72\x75\x6e': function () {
            try {
                var _0x5bc5a0 = _0xe5ec('0x3')[_0xe5ec('0x4')]('\x7c'), _0x4308ea = 0x0;
                while (!![]) {
                    switch (_0x5bc5a0[_0x4308ea++]) {
                    case '0':
                        hp3[_0xe5ec('0x5')](hp3$);
                        continue;
                    case '1':
                        hp2[_0xe5ec('0x5')](hp3);
                        continue;
                    case '2':
                        hp3 = _0x32b81e[_0xe5ec('0x6')](NewView, 'LL', _0x32b81e[_0xe5ec('0x7')](_0x32b81e[_0xe5ec('0x8')](H), 0.49), _0x32b81e[_0xe5ec('0x9')](_0x32b81e[_0xe5ec('0x8')](H), 0.03), 'LC', 0x1, 0x1, [
                            'RT',
                            _0xe5ec('0xa'),
                            _0xe5ec('0xb')
                        ], 0xa, null);
                        continue;
                    case '3':
                        hp1[_0xe5ec('0x5')](hp2);
                        continue;
                    case '4':
                        hp2[_0xe5ec('0x5')](hp4);
                        continue;
                    case '5':
                        hp3$ = _0x32b81e[_0xe5ec('0x6')](NewView, 'LL', _0x32b81e[_0xe5ec('0xc')](_0x32b81e[_0xe5ec('0x8')](H), 0.49), _0x32b81e[_0xe5ec('0xd')](_0x32b81e[_0xe5ec('0xe')](H), 0.03), 'CC', 0x1, 0x1, [
                            'RT',
                            _0xe5ec('0xf'),
                            _0xe5ec('0x10')
                        ], 0xa, null);
                        continue;
                    case '6':
                        hpc1 = _0x32b81e[_0xe5ec('0x11')](NewCDV, 0x2, null, 0x0, hp1, -0x1, _0x32b81e[_0xe5ec('0x12')](_0x32b81e[_0xe5ec('0x13')](H), 0.75), ![], ![], 'CB', 0x0, 0x0);
                        continue;
                    case '7':
                        hp4 = _0x32b81e[_0xe5ec('0x6')](NewView, 'LL', _0x32b81e[_0xe5ec('0x14')](_0x32b81e[_0xe5ec('0x15')](H), 0.01), _0x32b81e[_0xe5ec('0x16')](_0x32b81e[_0xe5ec('0x17')](H), 0.03), 'CC', 0x1, 0x1, [
                            'LR',
                            _0xe5ec('0x18'),
                            _0xe5ec('0x19')
                        ], [
                            0xa,
                            0x0,
                            0x0,
                            0xa
                        ], null);
                        continue;
                    case '8':
                        hp1[_0xe5ec('0x5')](hp5);
                        continue;
                    case '9':
                        hp5 = _0x32b81e[_0xe5ec('0x1a')](NewView, 'LL', _0x32b81e[_0xe5ec('0x16')](_0x32b81e[_0xe5ec('0x17')](H), 0.49), _0x32b81e[_0xe5ec('0x16')](_0x32b81e[_0xe5ec('0x17')](H), 0.01), 'CC', 0x1, 0x1, [
                            'TB',
                            _0xe5ec('0x18'),
                            _0xe5ec('0x19')
                        ], [
                            0xa,
                            0xa,
                            0x0,
                            0x0
                        ], null);
                        continue;
                    case '10':
                        hp2 = _0x32b81e[_0xe5ec('0x1b')](NewView, 'LL', _0x32b81e[_0xe5ec('0x1c')](_0x32b81e[_0xe5ec('0x17')](H), 0.5), _0x32b81e[_0xe5ec('0x1c')](_0x32b81e[_0xe5ec('0x1d')](H), 0.03), 'CC', 0x0, 0x2, null, null, null);
                        continue;
                    case '11':
                        hp1 = _0x32b81e[_0xe5ec('0x1e')](NewView, 'LL', _0x32b81e[_0xe5ec('0x1f')](_0x32b81e[_0xe5ec('0x1d')](H), 0.5), _0x32b81e[_0xe5ec('0x20')](_0x32b81e[_0xe5ec('0x21')](H), 0.04), 'CC', 0x1, 0x2, null, null, null);
                        continue;
                    }
                    break;
                }
            } catch (_0x21a5dd) {
                _0x32b81e[_0xe5ec('0x22')](print, _0x32b81e[_0xe5ec('0x23')](_0xe5ec('0x24'), _0x21a5dd));
            }
            _0x32b81e[_0xe5ec('0x25')](UIFadein, hp1, 0x0, 0x64, 0xc8);
        }
    }));
}
;
var xx1 = [], yy1 = [], zz1 = [], ti = 0x0;
var l = 0x1;
var k = 0xa;
var xx2 = 0xa;
var n = ParticleType[_0xe5ec('0x26')];
var gh = 0x0;
var loc1 = ![];
var x = 0x0, y = 0x0, z = 0x0;
var spy = 0x0, y1 = 0x0, y2 = 0x0;
var det = 0x2;
var lev = 0x0;
var pro = 0x0;
var x1 = new java[_0xe5ec('0x1')][_0xe5ec('0x27')](new java[_0xe5ec('0x1')][_0xe5ec('0x2')]({
    '\x72\x75\x6e': function () {
        var _0x44b77d = {
            '\x75\x76\x56': function _0x501d5e(_0x414c76, _0x4d2434) {
                return _0x414c76 == _0x4d2434;
            },
            '\x50\x53\x4b': function _0x1b75f3(_0x72ea40, _0x18ebfe) {
                return _0x72ea40 * _0x18ebfe;
            },
            '\x4f\x6f\x4e': function _0x286bb4(_0x3dd552, _0x540c6f) {
                return _0x3dd552 * _0x540c6f;
            },
            '\x4d\x55\x43': function _0x39f0cf(_0x1cb44f, _0xe764c8) {
                return _0x1cb44f * _0xe764c8;
            },
            '\x73\x61\x47': function _0x276da5(_0x56e5b3, _0xc47a8f) {
                return _0x56e5b3 - _0xc47a8f;
            },
            '\x53\x77\x7a': function _0x400cf4(_0x5ca7f4, _0x2128be) {
                return _0x5ca7f4 - _0x2128be;
            },
            '\x6f\x69\x75': function _0x3ff856(_0x21cae9, _0x3f5a9c) {
                return _0x21cae9 / _0x3f5a9c;
            },
            '\x4e\x49\x50': function _0x111498(_0x273317, _0x5eca75) {
                return _0x273317 + _0x5eca75;
            },
            '\x41\x72\x70': function _0x28d6b9(_0x445b32, _0x81dafc) {
                return _0x445b32 * _0x81dafc;
            },
            '\x4b\x49\x46': function _0x4e34cf(_0x2c547e, _0x52d890) {
                return _0x2c547e * _0x52d890;
            },
            '\x6b\x48\x47': function _0x3e1207(_0x52920a, _0x17ed9e) {
                return _0x52920a(_0x17ed9e);
            },
            '\x6e\x52\x69': function _0x24e8a9(_0x2393d7, _0x214df8) {
                return _0x2393d7 + _0x214df8;
            }
        };
        while (0x1) {
            try {
                ctx[_0xe5ec('0x0')](new java[_0xe5ec('0x1')][_0xe5ec('0x2')]({
                    '\x72\x75\x6e': function () {
                        var _0x3d73e5 = {
                            '\x6f\x50\x69': function _0xb81397(_0x4e7a6c) {
                                return _0x4e7a6c();
                            },
                            '\x50\x59\x63': function _0x29f5fe(_0x47eb7f, _0x2f842f) {
                                return _0x47eb7f == _0x2f842f;
                            },
                            '\x57\x76\x77': function _0x77b1ac(_0x57ee20, _0x15f5bb) {
                                return _0x57ee20 > _0x15f5bb;
                            },
                            '\x4e\x6c\x41': function _0x38dc6f(_0x395410, _0x4f2339) {
                                return _0x395410 == _0x4f2339;
                            },
                            '\x56\x69\x6b': function _0x784d2(_0x5fea9, _0x28e5bc) {
                                return _0x5fea9 - _0x28e5bc;
                            },
                            '\x6c\x74\x66': function _0x3a5ac8(_0x2e0d4c, _0x309a85) {
                                return _0x2e0d4c > _0x309a85;
                            },
                            '\x69\x63\x74': function _0xbd6863(_0x56ba24, _0x54d0b0) {
                                return _0x56ba24 < _0x54d0b0;
                            },
                            '\x58\x4c\x73': function _0x3dcabe(_0x19cbc8, _0x5960c8, _0x45e679, _0x1b2fd2, _0x29ef22) {
                                return _0x19cbc8(_0x5960c8, _0x45e679, _0x1b2fd2, _0x29ef22);
                            },
                            '\x46\x6b\x6a': function _0x2bab0c(_0x49064e) {
                                return _0x49064e();
                            },
                            '\x53\x46\x57': function _0x1c19d9(_0x45c508) {
                                return _0x45c508();
                            },
                            '\x4c\x52\x45': function _0x856935(_0x272e49, _0x56df73, _0x5d8793, _0x37e604, _0xb489e6, _0x2463a0, _0x1009d0) {
                                return _0x272e49(_0x56df73, _0x5d8793, _0x37e604, _0xb489e6, _0x2463a0, _0x1009d0);
                            },
                            '\x59\x4c\x76': function _0x352809(_0x2ac42d, _0x1d4046) {
                                return _0x2ac42d - _0x1d4046;
                            },
                            '\x41\x6d\x61': function _0xa21c4d(_0x457467, _0x44302f) {
                                return _0x457467 == _0x44302f;
                            },
                            '\x68\x48\x42': function _0x5ef8eb(_0x417c6a, _0x17f837) {
                                return _0x417c6a == _0x17f837;
                            },
                            '\x56\x6a\x6c': function _0x58fb21(_0x43f7a2, _0x5cc18c) {
                                return _0x43f7a2 == _0x5cc18c;
                            },
                            '\x62\x6e\x77': function _0x346e23(_0x735b05, _0x148054) {
                                return _0x735b05 == _0x148054;
                            },
                            '\x61\x67\x4e': function _0x3d74a2(_0x11b805, _0x187f50) {
                                return _0x11b805 + _0x187f50;
                            },
                            '\x6b\x51\x45': function _0x5cc3b9(_0x27b953, _0x596d0d) {
                                return _0x27b953 != _0x596d0d;
                            },
                            '\x43\x54\x65': function _0x28d210(_0x3595bf, _0x422ad2) {
                                return _0x3595bf - _0x422ad2;
                            },
                            '\x41\x52\x77': function _0x34ee5c(_0x1528fe) {
                                return _0x1528fe();
                            },
                            '\x54\x57\x51': function _0x388a39(_0x400c06) {
                                return _0x400c06();
                            },
                            '\x4c\x6e\x77': function _0x59c80c(_0x16a35c) {
                                return _0x16a35c();
                            },
                            '\x53\x47\x50': function _0x394ce7(_0x4008c2) {
                                return _0x4008c2();
                            },
                            '\x6a\x59\x76': function _0x5f28d2(_0x3335a7, _0x4ab743) {
                                return _0x3335a7 < _0x4ab743;
                            },
                            '\x77\x46\x55': function _0x50c1a0(_0x4f9f4a, _0xea0dfb) {
                                return _0x4f9f4a != _0xea0dfb;
                            },
                            '\x4e\x7a\x51': function _0x2bd71a(_0x195888, _0x3f02b) {
                                return _0x195888 != _0x3f02b;
                            },
                            '\x4f\x64\x4a': function _0x5e06e6(_0x24230c, _0x43e8ac) {
                                return _0x24230c + _0x43e8ac;
                            },
                            '\x79\x6e\x71': function _0x1209c8(_0x2a7dea) {
                                return _0x2a7dea();
                            },
                            '\x77\x51\x66': function _0x2c9057(_0x3a5315, _0x4184f8) {
                                return _0x3a5315 * _0x4184f8;
                            },
                            '\x6b\x47\x74': function _0xf000f6(_0x4c8deb) {
                                return _0x4c8deb();
                            },
                            '\x49\x54\x6a': function _0x5d53a9(_0x57bf13) {
                                return _0x57bf13();
                            },
                            '\x65\x51\x48': function _0x4eed57(_0x27420a) {
                                return _0x27420a();
                            },
                            '\x4f\x55\x57': function _0xaee0eb(_0x59a116, _0xe5e703) {
                                return _0x59a116 == _0xe5e703;
                            },
                            '\x41\x4b\x52': function _0x5236d7(_0x1ae658, _0x1ce1a3) {
                                return _0x1ae658 != _0x1ce1a3;
                            },
                            '\x66\x45\x71': function _0x2af09c(_0x2f7e42, _0x15852f) {
                                return _0x2f7e42 != _0x15852f;
                            },
                            '\x4b\x77\x4f': function _0x382fa9(_0x5e825a, _0x311b45) {
                                return _0x5e825a * _0x311b45;
                            },
                            '\x6d\x77\x76': function _0x20c715(_0x14fd09, _0x25ac7e) {
                                return _0x14fd09 * _0x25ac7e;
                            },
                            '\x53\x57\x64': function _0x5bc8bf(_0x3621a4, _0x98a0c) {
                                return _0x3621a4 / _0x98a0c;
                            },
                            '\x7a\x79\x44': function _0x4309f4(_0x232765, _0x2dd488) {
                                return _0x232765 * _0x2dd488;
                            },
                            '\x6b\x67\x7a': function _0x120240(_0x422a9f) {
                                return _0x422a9f();
                            },
                            '\x67\x55\x55': function _0x13d4ab(_0x5c3855, _0x2d1b59) {
                                return _0x5c3855 != _0x2d1b59;
                            }
                        };
                        var _0x47384a = _0xe5ec('0x28')[_0xe5ec('0x4')]('\x7c'), _0x321c5d = 0x0;
                        while (!![]) {
                            switch (_0x47384a[_0x321c5d++]) {
                            case '0':
                                var _0x2986e1 = {
                                    '\x50\x59\x6a': function _0x75e152(_0x5487c6) {
                                        return _0x3d73e5[_0xe5ec('0x29')](_0x5487c6);
                                    }
                                };
                                continue;
                            case '1':
                                if (_0x3d73e5[_0xe5ec('0x2a')](fun3[0x1], _0xe5ec('0x2b'))) {
                                    pro++;
                                    if (_0x3d73e5[_0xe5ec('0x2c')](pro, 0x32)) {
                                        pro = 0x0;
                                    }
                                    ;
                                    if (_0x3d73e5[_0xe5ec('0x2d')](pro, 0x1)) {
                                        loc1 = !![];
                                    }
                                    ;
                                    var _0x53ea30 = Player[_0xe5ec('0x2e')](), _0x59e0a4 = Player[_0xe5ec('0x2f')](), _0x1cb9d6 = Player[_0xe5ec('0x30')]();
                                    xx1[ti] = _0x53ea30, yy1[ti] = _0x3d73e5[_0xe5ec('0x31')](_0x59e0a4, 1.4), zz1[ti] = _0x1cb9d6;
                                    ti++;
                                    if (_0x3d73e5[_0xe5ec('0x32')](ti, 0xa)) {
                                        xx1 = [], yy1 = [], zz1 = [], ti = 0x0;
                                    }
                                    for (var _0x7470b2 = 0x0; _0x3d73e5[_0xe5ec('0x33')](_0x7470b2, xx1[_0xe5ec('0x34')]); _0x7470b2++) {
                                        Level[_0xe5ec('0x35')](ParticleType[_0xe5ec('0x36')], xx1[_0x7470b2], yy1[_0x7470b2], zz1[_0x7470b2], 0x0, 0x0, 0x0, 0x2);
                                    }
                                    if (_0x3d73e5[_0xe5ec('0x2d')](loc1, !![])) {
                                        function _0x2d2779() {
                                            var _0x1e7d20 = {
                                                '\x6d\x51\x50': function _0x5754e6(_0x170ce6, _0x5f501e) {
                                                    return _0x170ce6 + _0x5f501e;
                                                },
                                                '\x54\x6c\x44': function _0x11a62b(_0x5ac7d4, _0x2f00db) {
                                                    return _0x5ac7d4 * _0x2f00db;
                                                },
                                                '\x59\x43\x50': function _0x17e430(_0x57f919, _0x2a40b5) {
                                                    return _0x57f919 + _0x2a40b5;
                                                },
                                                '\x51\x58\x6f': function _0x4775a6(_0xd165ec, _0xda402f) {
                                                    return _0xd165ec - _0xda402f;
                                                },
                                                '\x64\x67\x55': function _0x1fc501(_0x1631b3, _0x12a025) {
                                                    return _0x1631b3 * _0x12a025;
                                                },
                                                '\x6d\x4f\x71': function _0x377e65(_0x14b8a9, _0x32f0f5) {
                                                    return _0x14b8a9 - _0x32f0f5;
                                                },
                                                '\x59\x61\x51': function _0x3834bf(_0x5f51ff, _0x129001) {
                                                    return _0x5f51ff + _0x129001;
                                                },
                                                '\x49\x48\x4c': function _0x72ec89(_0xecb124, _0x201c66) {
                                                    return _0xecb124 + _0x201c66;
                                                },
                                                '\x4b\x71\x4e': function _0xb3f068(_0x221e2b, _0x2c9939) {
                                                    return _0x221e2b * _0x2c9939;
                                                },
                                                '\x57\x70\x46': function _0x19c596(_0x21a9f6, _0x215828) {
                                                    return _0x21a9f6 / _0x215828;
                                                },
                                                '\x78\x55\x50': function _0x830ff4(_0x1e8143, _0x459d1f) {
                                                    return _0x1e8143 * _0x459d1f;
                                                },
                                                '\x62\x6f\x47': function _0x1915a4(_0x30e92, _0x44562d) {
                                                    return _0x30e92 - _0x44562d;
                                                },
                                                '\x79\x71\x44': function _0x5d71a0(_0x410e1b, _0x5c0984) {
                                                    return _0x410e1b * _0x5c0984;
                                                },
                                                '\x53\x6e\x78': function _0x346864(_0x94d22c, _0x38ef79) {
                                                    return _0x94d22c * _0x38ef79;
                                                },
                                                '\x6b\x55\x6a': function _0x2e7522(_0x18e35c, _0x360bfc) {
                                                    return _0x18e35c * _0x360bfc;
                                                },
                                                '\x54\x6c\x4c': function _0x10ae15(_0x2a97da, _0x52df61) {
                                                    return _0x2a97da * _0x52df61;
                                                },
                                                '\x77\x46\x45': function _0x1966dc(_0x1dad68, _0x51d508) {
                                                    return _0x1dad68 * _0x51d508;
                                                },
                                                '\x6e\x61\x6d': function _0x489b7d(_0x804e1c, _0xa91da) {
                                                    return _0x804e1c / _0xa91da;
                                                },
                                                '\x6f\x63\x4a': function _0x5ae700(_0x38dc98, _0x16cf01) {
                                                    return _0x38dc98 * _0x16cf01;
                                                },
                                                '\x53\x65\x71': function _0x19ddf5(_0x364aa9, _0x1696aa) {
                                                    return _0x364aa9 > _0x1696aa;
                                                },
                                                '\x63\x4d\x48': function _0x2175ee(_0x4258d8, _0x41882e) {
                                                    return _0x4258d8 - _0x41882e;
                                                },
                                                '\x4c\x4a\x75': function _0x496663(_0x46acc4, _0x36dff0) {
                                                    return _0x46acc4 * _0x36dff0;
                                                },
                                                '\x50\x50\x68': function _0x11f23b(_0x3cbdae, _0x4ebc5f) {
                                                    return _0x3cbdae * _0x4ebc5f;
                                                }
                                            };
                                            var _0x5065df = _0xe5ec('0x37')[_0xe5ec('0x4')]('\x7c'), _0x42ddf3 = 0x0;
                                            while (!![]) {
                                                switch (_0x5065df[_0x42ddf3++]) {
                                                case '0':
                                                    Level[_0xe5ec('0x35')](n, _0x1e7d20[_0xe5ec('0x38')](xx4, _0x1e7d20[_0xe5ec('0x39')](_0x3367c9, l)), _0x1e7d20[_0xe5ec('0x3a')](yy4, gh), _0x1e7d20[_0xe5ec('0x3b')](zz4, _0x1e7d20[_0xe5ec('0x3c')](_0x19e40c, l)), 0x0, 0x0, 0x0, 0x14);
                                                    continue;
                                                case '1':
                                                    xx4 = Player[_0xe5ec('0x2e')]();
                                                    continue;
                                                case '2':
                                                    Level[_0xe5ec('0x35')](n, _0x1e7d20[_0xe5ec('0x3d')](xx4, _0x1e7d20[_0xe5ec('0x3c')](_0x19e40c, l)), _0x1e7d20[_0xe5ec('0x3e')](yy4, gh), _0x1e7d20[_0xe5ec('0x3f')](zz4, _0x1e7d20[_0xe5ec('0x3c')](_0x3367c9, l)), 0x0, 0x0, 0x0, 0x14);
                                                    continue;
                                                case '3':
                                                    var _0x31c2e4 = _0x1e7d20[_0xe5ec('0x3c')](Math[_0xe5ec('0x40')](_0x1e7d20[_0xe5ec('0x41')](_0x1e7d20[_0xe5ec('0x42')](_0x1e7d20[_0xe5ec('0x43')](xx3, Math['PI']), 0xb4), k)), 0x2);
                                                    continue;
                                                case '4':
                                                    yy4 = _0x1e7d20[_0xe5ec('0x3f')](Player[_0xe5ec('0x2f')](), 0.5);
                                                    continue;
                                                case '5':
                                                    Level[_0xe5ec('0x35')](n, _0x1e7d20[_0xe5ec('0x3f')](xx4, _0x1e7d20[_0xe5ec('0x43')](_0x3fcdce, l)), _0x1e7d20[_0xe5ec('0x3f')](yy4, gh), _0x1e7d20[_0xe5ec('0x44')](zz4, _0x1e7d20[_0xe5ec('0x45')](_0x31c2e4, l)), 0x0, 0x0, 0x0, 0x14);
                                                    continue;
                                                case '6':
                                                    var _0x19e40c = _0x1e7d20[_0xe5ec('0x46')](Math[_0xe5ec('0x40')](_0x1e7d20[_0xe5ec('0x47')](_0x1e7d20[_0xe5ec('0x42')](_0x1e7d20[_0xe5ec('0x47')](xx2, Math['PI']), 0xb4), k)), 0x2);
                                                    continue;
                                                case '7':
                                                    var _0x3367c9 = _0x1e7d20[_0xe5ec('0x48')](Math[_0xe5ec('0x49')](_0x1e7d20[_0xe5ec('0x4a')](_0x1e7d20[_0xe5ec('0x4b')](_0x1e7d20[_0xe5ec('0x4c')](xx2, Math['PI']), 0xb4), k)), 0x2);
                                                    continue;
                                                case '8':
                                                    xx2++;
                                                    continue;
                                                case '9':
                                                    zz4 = Player[_0xe5ec('0x30')]();
                                                    continue;
                                                case '10':
                                                    gh += 0.1;
                                                    continue;
                                                case '11':
                                                    if (_0x1e7d20[_0xe5ec('0x4d')](gh, 0x1)) {
                                                        gh = -0x2;
                                                        loc1 = ![];
                                                    }
                                                    continue;
                                                case '12':
                                                    xx3 = _0x1e7d20[_0xe5ec('0x3f')](xx2, 0x8);
                                                    continue;
                                                case '13':
                                                    Level[_0xe5ec('0x35')](n, _0x1e7d20[_0xe5ec('0x4e')](xx4, _0x1e7d20[_0xe5ec('0x4c')](_0x31c2e4, l)), _0x1e7d20[_0xe5ec('0x3f')](yy4, gh), _0x1e7d20[_0xe5ec('0x3f')](zz4, _0x1e7d20[_0xe5ec('0x4f')](_0x3fcdce, l)), 0x0, 0x0, 0x0, 0x14);
                                                    continue;
                                                case '14':
                                                    var _0x3fcdce = _0x1e7d20[_0xe5ec('0x50')](Math[_0xe5ec('0x49')](_0x1e7d20[_0xe5ec('0x50')](_0x1e7d20[_0xe5ec('0x4b')](_0x1e7d20[_0xe5ec('0x50')](xx3, Math['PI']), 0xb4), k)), 0x2);
                                                    continue;
                                                }
                                                break;
                                            }
                                        }
                                        ;
                                        _0x3d73e5[_0xe5ec('0x29')](_0x2d2779);
                                        new android['os'][_0xe5ec('0x51')]()[_0xe5ec('0x52')](new java[_0xe5ec('0x1')][_0xe5ec('0x2')]({
                                            '\x72\x75\x6e': function () {
                                                _0x2986e1[_0xe5ec('0x53')](_0x2d2779);
                                            }
                                        }), 0x4b);
                                    }
                                    ;
                                    function _0x40fad1(_0x607256, _0x21f54a, _0x16b7d4, _0xf85621) {
                                        var _0x5b0606 = {
                                            '\x6d\x71\x4c': function _0x24dc0b(_0x442776, _0x3a988a) {
                                                return _0x442776 <= _0x3a988a;
                                            },
                                            '\x78\x57\x6c': function _0x55d030(_0x280766, _0x14694a) {
                                                return _0x280766 / _0x14694a;
                                            },
                                            '\x6e\x49\x73': function _0x34cc5d(_0x21c46a, _0x316da9) {
                                                return _0x21c46a + _0x316da9;
                                            },
                                            '\x55\x50\x6b': function _0x28a16f(_0x4af013, _0x4ace71) {
                                                return _0x4af013 * _0x4ace71;
                                            },
                                            '\x41\x6b\x42': function _0x37925b(_0x59d534, _0x36d4df) {
                                                return _0x59d534 - _0x36d4df;
                                            },
                                            '\x58\x68\x4a': function _0xbb5613(_0x4ce795, _0x5bd571) {
                                                return _0x4ce795 + _0x5bd571;
                                            },
                                            '\x72\x67\x63': function _0x1f11d2(_0x3612b1, _0x85fc44) {
                                                return _0x3612b1 - _0x85fc44;
                                            },
                                            '\x77\x53\x70': function _0x58fb7b(_0x3b6324, _0x3c411b) {
                                                return _0x3b6324 - _0x3c411b;
                                            },
                                            '\x59\x7a\x48': function _0x102f15(_0x34dbbc, _0x936875) {
                                                return _0x34dbbc * _0x936875;
                                            },
                                            '\x6d\x74\x78': function _0x510d96(_0x1c65bf, _0x4fa016) {
                                                return _0x1c65bf / _0x4fa016;
                                            },
                                            '\x5a\x6b\x72': function _0x2c691d(_0x52ecd7, _0x432187) {
                                                return _0x52ecd7 * _0x432187;
                                            },
                                            '\x6a\x45\x55': function _0x2a6e45(_0x54a57f, _0x15d79e) {
                                                return _0x54a57f + _0x15d79e;
                                            },
                                            '\x68\x4b\x72': function _0x671904(_0x5ecade, _0x8bfd64) {
                                                return _0x5ecade * _0x8bfd64;
                                            },
                                            '\x41\x6b\x74': function _0xcea80c(_0x509b2a, _0x5a411f) {
                                                return _0x509b2a + _0x5a411f;
                                            },
                                            '\x52\x79\x52': function _0x3955f7(_0x1c4c85, _0x5f0db5) {
                                                return _0x1c4c85 + _0x5f0db5;
                                            },
                                            '\x42\x6a\x5a': function _0x40cfc6(_0x1da433, _0x58369f) {
                                                return _0x1da433 * _0x58369f;
                                            },
                                            '\x4b\x77\x62': function _0x1838ed(_0x46c911, _0x12fda6) {
                                                return _0x46c911 / _0x12fda6;
                                            },
                                            '\x44\x50\x62': function _0x347818(_0xf5ba25, _0x1c4eaa) {
                                                return _0xf5ba25 * _0x1c4eaa;
                                            },
                                            '\x6c\x59\x55': function _0x49d5a2(_0x537d26, _0x5ea4df) {
                                                return _0x537d26 / _0x5ea4df;
                                            },
                                            '\x4c\x4d\x49': function _0x3a82f5(_0xce7530, _0x1a0ce9) {
                                                return _0xce7530 * _0x1a0ce9;
                                            },
                                            '\x6c\x74\x6a': function _0x3dab65(_0x5f1f43, _0x336a07) {
                                                return _0x5f1f43 + _0x336a07;
                                            },
                                            '\x54\x52\x6c': function _0x5644e6(_0x277a3a, _0x5019d7) {
                                                return _0x277a3a * _0x5019d7;
                                            },
                                            '\x65\x4a\x46': function _0x1b93d6(_0x273a41, _0x801269) {
                                                return _0x273a41 + _0x801269;
                                            },
                                            '\x54\x44\x73': function _0x8aba86(_0x10517f, _0x5dc7e6) {
                                                return _0x10517f / _0x5dc7e6;
                                            },
                                            '\x48\x45\x45': function _0x25c61b(_0xd53c41, _0x2b2294) {
                                                return _0xd53c41 * _0x2b2294;
                                            },
                                            '\x67\x4c\x63': function _0x267549(_0x195e97, _0x5014e7) {
                                                return _0x195e97 + _0x5014e7;
                                            },
                                            '\x70\x41\x54': function _0x59f6ab(_0x1918f8, _0xdb638a) {
                                                return _0x1918f8 * _0xdb638a;
                                            },
                                            '\x42\x61\x68': function _0x34dd59(_0x90f20f, _0x4324f5) {
                                                return _0x90f20f / _0x4324f5;
                                            },
                                            '\x4f\x71\x53': function _0x368c1b(_0x1dbe13, _0xfb89b1) {
                                                return _0x1dbe13 * _0xfb89b1;
                                            },
                                            '\x72\x71\x68': function _0x25b98e(_0xa94a90, _0xf9b220) {
                                                return _0xa94a90 + _0xf9b220;
                                            },
                                            '\x75\x7a\x70': function _0x7d4218(_0x43ec83, _0x39a85e) {
                                                return _0x43ec83 + _0x39a85e;
                                            },
                                            '\x6e\x6b\x78': function _0x427db5(_0x74bf0b, _0x55ba3f) {
                                                return _0x74bf0b * _0x55ba3f;
                                            },
                                            '\x67\x54\x6f': function _0x23ba19(_0x5e920e, _0x17bade) {
                                                return _0x5e920e * _0x17bade;
                                            },
                                            '\x7a\x4a\x72': function _0x41beb4(_0x22b8a7, _0x502f77) {
                                                return _0x22b8a7 + _0x502f77;
                                            },
                                            '\x71\x6e\x72': function _0x5ec247(_0x464ce8, _0x552b3b) {
                                                return _0x464ce8 + _0x552b3b;
                                            },
                                            '\x46\x67\x68': function _0x58160c(_0x379e4d, _0x44e0f9) {
                                                return _0x379e4d * _0x44e0f9;
                                            },
                                            '\x54\x44\x6f': function _0x164fb6(_0xc80299, _0xc3f5af) {
                                                return _0xc80299 / _0xc3f5af;
                                            },
                                            '\x4e\x4b\x6c': function _0xa21bb7(_0x32f8f3, _0x3f2bbe) {
                                                return _0x32f8f3 / _0x3f2bbe;
                                            },
                                            '\x70\x77\x47': function _0xd736b7(_0x282d33, _0x1e95d1) {
                                                return _0x282d33 - _0x1e95d1;
                                            },
                                            '\x4e\x52\x55': function _0x195926(_0x11b1c7, _0x53997a) {
                                                return _0x11b1c7 + _0x53997a;
                                            },
                                            '\x61\x72\x67': function _0x48b639(_0x59a6ce, _0x2104f3) {
                                                return _0x59a6ce - _0x2104f3;
                                            },
                                            '\x64\x6a\x6a': function _0x3d7945(_0x4fa24e, _0x5428b0) {
                                                return _0x4fa24e * _0x5428b0;
                                            },
                                            '\x4d\x72\x78': function _0x645f6b(_0x563e55, _0x1cabf3) {
                                                return _0x563e55 - _0x1cabf3;
                                            },
                                            '\x4b\x70\x6a': function _0x2833f7(_0x264006, _0x1d2003) {
                                                return _0x264006 + _0x1d2003;
                                            },
                                            '\x44\x54\x45': function _0x22e631(_0x2ae6bf, _0x4f9bd8) {
                                                return _0x2ae6bf * _0x4f9bd8;
                                            },
                                            '\x53\x55\x78': function _0x9915f4(_0x5e61db, _0x896a4) {
                                                return _0x5e61db * _0x896a4;
                                            },
                                            '\x6c\x62\x72': function _0x1f9009(_0x3abbbf, _0x167895) {
                                                return _0x3abbbf / _0x167895;
                                            },
                                            '\x65\x77\x44': function _0x2ebfc0(_0x4230d1, _0x28d337) {
                                                return _0x4230d1 + _0x28d337;
                                            }
                                        };
                                        var _0x3f4ffc = _0xe5ec('0x54')[_0xe5ec('0x4')]('\x7c'), _0x56cd82 = 0x0;
                                        while (!![]) {
                                            switch (_0x3f4ffc[_0x56cd82++]) {
                                            case '0':
                                                var _0x4f1998 = ParticleType[_0xe5ec('0x55')];
                                                continue;
                                            case '1':
                                                for (var _0x111f8a = 0x0; _0x5b0606[_0xe5ec('0x56')](_0x111f8a, _0x1715ce); _0x111f8a += _0x5b0606[_0xe5ec('0x57')](_0xf85621, 0x9)) {
                                                    var _0x237983 = _0xe5ec('0x58')[_0xe5ec('0x4')]('\x7c'), _0x5c42c8 = 0x0;
                                                    while (!![]) {
                                                        switch (_0x237983[_0x5c42c8++]) {
                                                        case '0':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x59')](_0x607256, _0x5b0606[_0xe5ec('0x5a')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x57')](_0x5b0606[_0xe5ec('0x5a')](_0x5b0606[_0xe5ec('0x5b')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x5c')](_0x5b0606[_0xe5ec('0x5c')](_0x16b7d4, _0xf85621), _0x5b0606[_0xe5ec('0x5a')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x57')](_0x5b0606[_0xe5ec('0x5a')](_0x5b0606[_0xe5ec('0x5d')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '1':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x5c')](_0x5b0606[_0xe5ec('0x5e')](_0x607256, _0xf85621), _0x5b0606[_0xe5ec('0x5f')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x60')](_0x5b0606[_0xe5ec('0x61')](22.5, Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x62')](_0x16b7d4, _0x5b0606[_0xe5ec('0x61')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x60')](_0x5b0606[_0xe5ec('0x63')](22.5, Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '2':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x62')](_0x607256, _0x5b0606[_0xe5ec('0x63')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x60')](_0x5b0606[_0xe5ec('0x63')](_0x5b0606[_0xe5ec('0x64')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x65')](_0x5b0606[_0xe5ec('0x5e')](_0x16b7d4, _0xf85621), _0x5b0606[_0xe5ec('0x63')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x60')](_0x5b0606[_0xe5ec('0x63')](_0x5b0606[_0xe5ec('0x65')](0x5a, 22.5), Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '3':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x65')](_0x5b0606[_0xe5ec('0x5e')](_0x607256, _0xf85621), _0x5b0606[_0xe5ec('0x66')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x67')](_0x5b0606[_0xe5ec('0x68')](337.5, Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x65')](_0x16b7d4, _0x5b0606[_0xe5ec('0x68')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x69')](_0x5b0606[_0xe5ec('0x6a')](337.5, Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '4':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x65')](_0x5b0606[_0xe5ec('0x6b')](_0x607256, _0xf85621), _0x5b0606[_0xe5ec('0x6c')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x69')](_0x5b0606[_0xe5ec('0x6c')](202.5, Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x6d')](_0x16b7d4, _0x5b0606[_0xe5ec('0x6c')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x6e')](_0x5b0606[_0xe5ec('0x6f')](202.5, Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '5':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x70')](_0x607256, _0x5b0606[_0xe5ec('0x71')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x72')](_0x5b0606[_0xe5ec('0x73')](_0x5b0606[_0xe5ec('0x74')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x74')](_0x5b0606[_0xe5ec('0x75')](_0x16b7d4, _0xf85621), _0x5b0606[_0xe5ec('0x76')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x72')](_0x5b0606[_0xe5ec('0x77')](_0x5b0606[_0xe5ec('0x78')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '6':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x79')](_0x5b0606[_0xe5ec('0x79')](_0x607256, _0xf85621), _0x5b0606[_0xe5ec('0x77')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x72')](_0x5b0606[_0xe5ec('0x77')](157.5, Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x79')](_0x16b7d4, _0x5b0606[_0xe5ec('0x7a')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x7b')](_0x5b0606[_0xe5ec('0x7a')](157.5, Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        case '7':
                                                            Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x79')](_0x607256, _0x5b0606[_0xe5ec('0x7a')](Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x7c')](_0x5b0606[_0xe5ec('0x7a')](_0x5b0606[_0xe5ec('0x7d')](0x10e, 22.5), Math['PI']), 0xb4)), _0x111f8a)), _0x21f54a, _0x5b0606[_0xe5ec('0x7e')](_0x5b0606[_0xe5ec('0x7f')](_0x16b7d4, _0xf85621), _0x5b0606[_0xe5ec('0x80')](Math[_0xe5ec('0x49')](_0x5b0606[_0xe5ec('0x7c')](_0x5b0606[_0xe5ec('0x80')](_0x5b0606[_0xe5ec('0x81')](0x5a, 22.5), Math['PI']), 0xb4)), _0x111f8a)), 0x0, 0x0, 0x0, _0x20f69e);
                                                            continue;
                                                        }
                                                        break;
                                                    }
                                                }
                                                continue;
                                            case '2':
                                                var _0xf85621 = Math[_0xe5ec('0x82')](_0x5b0606[_0xe5ec('0x83')](_0x5b0606[_0xe5ec('0x84')](_0xf85621, _0xf85621), _0x5b0606[_0xe5ec('0x84')](_0xf85621, _0xf85621)));
                                                continue;
                                            case '3':
                                                var _0x1715ce = _0x5b0606[_0xe5ec('0x7c')](_0x5b0606[_0xe5ec('0x83')](Math[_0xe5ec('0x82')](_0x5b0606[_0xe5ec('0x7c')](_0x5b0606[_0xe5ec('0x85')](_0xf85621, _0xf85621), 0x2)), _0xf85621), Math[_0xe5ec('0x40')](_0x5b0606[_0xe5ec('0x7c')](_0x5b0606[_0xe5ec('0x85')](22.5, Math['PI']), 0xb4)));
                                                continue;
                                            case '4':
                                                for (_0x111f8a = 0x0; _0x5b0606[_0xe5ec('0x56')](_0x111f8a, 0x14); _0x111f8a += _0x5b0606[_0xe5ec('0x86')](_0xf85621, 0xa)) {
                                                    Level[_0xe5ec('0x35')](_0x4f1998, _0x5b0606[_0xe5ec('0x87')](_0x607256, _0x5b0606[_0xe5ec('0x85')](Math[_0xe5ec('0x40')](_0x111f8a), _0xf85621)), _0x21f54a, _0x5b0606[_0xe5ec('0x87')](_0x16b7d4, _0x5b0606[_0xe5ec('0x85')](Math[_0xe5ec('0x49')](_0x111f8a), _0xf85621)), 0x0, 0x0, 0x0, _0x20f69e);
                                                }
                                                continue;
                                            case '5':
                                                var _0x20f69e = 0x1;
                                                continue;
                                            }
                                            break;
                                        }
                                    }
                                    if (_0x3d73e5[_0xe5ec('0x2d')](pro, 0x1)) {
                                        loc1 = !![];
                                        _0x3d73e5[_0xe5ec('0x88')](_0x40fad1, _0x3d73e5[_0xe5ec('0x89')](getPlayerX), _0x3d73e5[_0xe5ec('0x31')](_0x3d73e5[_0xe5ec('0x8a')](getPlayerY), 0x1), _0x3d73e5[_0xe5ec('0x8a')](getPlayerZ), 0x2);
                                    }
                                    ;
                                    function _0x313050(_0x1c13c3, _0x2a8499, _0x23a8e1, _0x208c01, _0x13fd10, _0x1857e0) {
                                        while (_0x13fd10--) {
                                            var _0x1fd8f3 = _0xe5ec('0x8b')[_0xe5ec('0x4')]('\x7c'), _0x1baea9 = 0x0;
                                            while (!![]) {
                                                switch (_0x1fd8f3[_0x1baea9++]) {
                                                case '0':
                                                    if (_0x44b77d[_0xe5ec('0x8c')](_0x208c01, 0x2)) {
                                                        Level[_0xe5ec('0x35')](ParticleType[_0xe5ec('0x8d')], _0x1c13c3, _0x2a8499, _0x23a8e1, _0x44b77d[_0xe5ec('0x8e')](_0x49e016, _0x1b4e5a), _0x44b77d[_0xe5ec('0x8e')](_0x49e016, _0x4cec23), _0x44b77d[_0xe5ec('0x8f')](_0x49e016, _0x4d479f), 0x1);
                                                    }
                                                    continue;
                                                case '1':
                                                    if (_0x44b77d[_0xe5ec('0x8c')](_0x208c01, 0x1)) {
                                                        Level[_0xe5ec('0x35')](ParticleType[_0xe5ec('0x90')], _0x1c13c3, _0x2a8499, _0x23a8e1, _0x44b77d[_0xe5ec('0x8f')](_0x49e016, _0x1b4e5a), _0x44b77d[_0xe5ec('0x8f')](_0x49e016, _0x4cec23), _0x44b77d[_0xe5ec('0x91')](_0x49e016, _0x4d479f), 0x1);
                                                    }
                                                    continue;
                                                case '2':
                                                    var _0x4cec23 = _0x44b77d[_0xe5ec('0x92')](Math[_0xe5ec('0x93')](), 0.5);
                                                    continue;
                                                case '3':
                                                    var _0x1b4e5a = _0x44b77d[_0xe5ec('0x92')](Math[_0xe5ec('0x93')](), 0.5);
                                                    continue;
                                                case '4':
                                                    var _0x4d479f = _0x44b77d[_0xe5ec('0x94')](Math[_0xe5ec('0x93')](), 0.5);
                                                    continue;
                                                case '5':
                                                    var _0x49e016 = _0x44b77d[_0xe5ec('0x95')](_0x1857e0, Math[_0xe5ec('0x82')](_0x44b77d[_0xe5ec('0x96')](_0x44b77d[_0xe5ec('0x96')](_0x44b77d[_0xe5ec('0x97')](_0x1b4e5a, _0x1b4e5a), _0x44b77d[_0xe5ec('0x98')](_0x4cec23, _0x4cec23)), _0x44b77d[_0xe5ec('0x98')](_0x4d479f, _0x4d479f))));
                                                    continue;
                                                }
                                                break;
                                            }
                                        }
                                        ;
                                    }
                                    ;
                                    if (_0x3d73e5[_0xe5ec('0x2d')](pro, 0x1e)) {
                                        _0x3d73e5[_0xe5ec('0x99')](_0x313050, _0x3d73e5[_0xe5ec('0x8a')](getPlayerX), _0x3d73e5[_0xe5ec('0x9a')](_0x3d73e5[_0xe5ec('0x8a')](getPlayerY), 0x1), _0x3d73e5[_0xe5ec('0x8a')](getPlayerZ), 0x1, 0x32, 0.5);
                                        _0x3d73e5[_0xe5ec('0x99')](_0x313050, _0x3d73e5[_0xe5ec('0x8a')](getPlayerX), _0x3d73e5[_0xe5ec('0x9a')](_0x3d73e5[_0xe5ec('0x8a')](getPlayerY), 0x1), _0x3d73e5[_0xe5ec('0x8a')](getPlayerZ), 0x2, 0x64, 0.5);
                                    }
                                    ;
                                }
                                continue;
                            case '2':
                                if (_0x3d73e5[_0xe5ec('0x9b')](fun2[0x0], _0xe5ec('0x2b'))) {
                                    if (_0x3d73e5[_0xe5ec('0x9c')](det, 0x1)) {
                                        if (_0x3d73e5[_0xe5ec('0x33')](Entity[_0xe5ec('0x9d')](_0x3d73e5[_0xe5ec('0x8a')](getPlayerEnt))[_0xe5ec('0x9e')](0x1), -1.2)) {
                                            if (_0x3d73e5[_0xe5ec('0x9f')](x, 0x0) && _0x3d73e5[_0xe5ec('0xa0')](y, 0x0) && _0x3d73e5[_0xe5ec('0xa0')](z, 0x0)) {
                                            } else {
                                                Entity[_0xe5ec('0xa1')](Player[_0xe5ec('0xa2')](), x, _0x3d73e5[_0xe5ec('0xa3')](y, 0.5), z);
                                            }
                                            ;
                                        } else {
                                            if (_0x3d73e5[_0xe5ec('0xa4')](Level[_0xe5ec('0xa5')](_0x3d73e5[_0xe5ec('0xa6')](Entity[_0xe5ec('0x2e')](_0x3d73e5[_0xe5ec('0xa7')](getPlayerEnt)), 0x1), _0x3d73e5[_0xe5ec('0xa6')](Entity[_0xe5ec('0x2f')](_0x3d73e5[_0xe5ec('0xa7')](getPlayerEnt)), 0x2), Entity[_0xe5ec('0x30')](_0x3d73e5[_0xe5ec('0xa8')](getPlayerEnt))), 0x0)) {
                                                x = Entity[_0xe5ec('0x2e')](_0x3d73e5[_0xe5ec('0xa9')](getPlayerEnt));
                                                y = Entity[_0xe5ec('0x2f')](_0x3d73e5[_0xe5ec('0xa9')](getPlayerEnt));
                                                z = Entity[_0xe5ec('0x30')](_0x3d73e5[_0xe5ec('0xaa')](getPlayerEnt));
                                            }
                                            ;
                                        }
                                        ;
                                    } else if (_0x3d73e5[_0xe5ec('0xa0')](det, 0x2)) {
                                        var _0x513e28 = _0xe5ec('0xab')[_0xe5ec('0x4')]('\x7c'), _0x7b90a8 = 0x0;
                                        while (!![]) {
                                            switch (_0x513e28[_0x7b90a8++]) {
                                            case '0':
                                                y2 = Entity[_0xe5ec('0x2f')](_0x3d73e5[_0xe5ec('0xaa')](getPlayerEnt));
                                                continue;
                                            case '1':
                                                ;
                                                continue;
                                            case '2':
                                                if (_0x3d73e5[_0xe5ec('0xac')](spy, -2.4)) {
                                                    if (_0x3d73e5[_0xe5ec('0xa4')](x, 0x0) && _0x3d73e5[_0xe5ec('0xad')](y, 0x0) && _0x3d73e5[_0xe5ec('0xae')](z, 0x0)) {
                                                        if (_0x3d73e5[_0xe5ec('0xac')](lev, 0x3)) {
                                                            lev += 0x1;
                                                            Entity[_0xe5ec('0xa1')](Player[_0xe5ec('0xa2')](), x, _0x3d73e5[_0xe5ec('0xaf')](y, 0.5), z);
                                                            Entity[_0xe5ec('0xb0')](_0x3d73e5[_0xe5ec('0xb1')](getPlayerEnt), _0x3d73e5[_0xe5ec('0xb2')](lev, 0.2));
                                                        }
                                                        ;
                                                    }
                                                    ;
                                                } else if (_0x3d73e5[_0xe5ec('0xa0')](spy, 0x0)) {
                                                    lev = 0x0;
                                                    x = Entity[_0xe5ec('0x2e')](_0x3d73e5[_0xe5ec('0xb3')](getPlayerEnt));
                                                    y = Entity[_0xe5ec('0x2f')](_0x3d73e5[_0xe5ec('0xb4')](getPlayerEnt));
                                                    z = Entity[_0xe5ec('0x30')](_0x3d73e5[_0xe5ec('0xb4')](getPlayerEnt));
                                                }
                                                continue;
                                            case '3':
                                                y1 = Entity[_0xe5ec('0x2f')](_0x3d73e5[_0xe5ec('0xb5')](getPlayerEnt));
                                                continue;
                                            case '4':
                                                spy = _0x3d73e5[_0xe5ec('0xa6')](y1, y2);
                                                continue;
                                            }
                                            break;
                                        }
                                    }
                                    ;
                                } else {
                                    x = 0x0, y = 0x0, z = 0x0;
                                }
                                continue;
                            case '3':
                                ;
                                continue;
                            case '4':
                                ;
                                continue;
                            case '5':
                                if (_0x3d73e5[_0xe5ec('0xb6')](fun3[0x0], _0xe5ec('0x2b'))) {
                                    var _0x445df9 = Entity[_0xe5ec('0xb7')](Player[_0xe5ec('0xb8')]());
                                    var _0x57f94e = Entity[_0xe5ec('0xb9')](Player[_0xe5ec('0xb8')]());
                                    if (_0x3d73e5[_0xe5ec('0xb6')](_0x57f94e, 0x0)) {
                                        if (_0x3d73e5[_0xe5ec('0xba')](hpc1, null)) {
                                            hpc1[_0xe5ec('0xbb')]();
                                            hpc1 = null;
                                        }
                                        ;
                                    } else {
                                        if (_0x3d73e5[_0xe5ec('0xbc')](hpc1, null)) {
                                            hp3$[_0xe5ec('0xbd')](new android[_0xe5ec('0xbe')][_0xe5ec('0xbf')][_0xe5ec('0xc0')](_0x3d73e5[_0xe5ec('0xc1')](_0x3d73e5[_0xe5ec('0xc2')](_0x3d73e5[_0xe5ec('0xb5')](H), 0.49), _0x3d73e5[_0xe5ec('0xc3')](_0x57f94e, _0x445df9)), _0x3d73e5[_0xe5ec('0xc4')](_0x3d73e5[_0xe5ec('0xb5')](H), 0.04)));
                                        } else {
                                            _0x3d73e5[_0xe5ec('0xc5')](ShowHP);
                                        }
                                        ;
                                    }
                                    ;
                                } else {
                                    if (_0x3d73e5[_0xe5ec('0xc6')](hpc1, null)) {
                                        hpc1[_0xe5ec('0xbb')]();
                                        hpc1 = null;
                                    }
                                    ;
                                }
                                continue;
                            case '6':
                                ;
                                continue;
                            }
                            break;
                        }
                    }
                }));
            } catch (_0xfdf2e4) {
                _0x44b77d[_0xe5ec('0xc7')](print, _0x44b77d[_0xe5ec('0xc8')](_0xe5ec('0xc9'), _0xfdf2e4));
            }
            x1[_0xe5ec('0xca')](0x96);
        }
    }
}));
x1[_0xe5ec('0xcb')]();






//File Select
//Made By XFY9326
function File_Select(Default_Path)
{
	var File=new java.io.File(Default_Path);
	var File_Folder=File.getAbsolutePath().toString();
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	if(File.exists()&&File.isDirectory())
	{
		UI(File_Folder_List(File));
	}
	else
	{
		print("无法打开路径"+Default_Path);
	}
	
	function File_Folder_List(file)
	{
		var arr=new Array();
		var list=file.listFiles();
		if(list==null)
		{
			arr[0]="/...";
		}
		else
		{
			for(var i=0;i<list.length;i++)
			{
				arr[i]=list[i].getName().toString();
			}
			arr.sort();
			arr.unshift("/...");
		}
		return arr;
	}
	function File_Folder_Selected(path)
	{
		var file=new java.io.File(path);
		if(!file.exists())
		{
			print("路径不存在！"+path);
		}
		else if(file.isDirectory())
		{
			UI(File_Folder_List(file));
		}
		else if(file.isFile())
		{
			File_Selected(path);
		}
	}
	function File_Selected(path)
	{
		load(ReadData(path));
		TipMes("选择器由 XFY9326 提供");
	}
	function UI(data)
	{
		ctx.runOnUiThread(new java.lang.Runnable({run:function()
		{
			try
			{
				var dialog=new android.app.AlertDialog.Builder(ctx);
				dialog.setTitle("请选择文件");
				dialog.setItems(data,new android.content.DialogInterface.OnClickListener(){onClick:
				function(dialog,which)
				{
					if(which==0)
					{
						var pathtemp=File_Folder.split("/");
						var result="";
						for(var i=0;i<pathtemp.length;i++)
						{
							if(i!=pathtemp.length-1&&pathtemp[i]!=""&&pathtemp[i]!=" ")
							{
								result+="/"+pathtemp[i];
							}
						}
						result+="/";
						if(File_Folder=="/")
						{
							TipMes("已在根目录，无法返回");
						}
						else
						{
							dialog.cancel();
							File_Folder=result;
							File_Folder_Selected(File_Folder);
						}
					}
					else
					{
						dialog.cancel();
						File_Folder+="/"+data[which];
						File_Folder_Selected(File_Folder);
					}
				}});
				dialog.setNegativeButton("取消选择",null);
				dialog.show();
			}
			catch(err)
			{
				print("无法打开选择器UI: "+err);
			}
		}}));
	}
}



