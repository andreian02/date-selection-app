export function cheatsheet(input){
    let details;
    
    if (input == "子") {
        details = {
            会: ["丑","亥"],
            S合: ["申","辰"],
            冲: "午",
            L合: "丑",
            刑: ["卯"],
            破: "酉",
        }
    } else if (input == "丑"){
        details = { 
            会: ["子","亥"],
            S合: ["酉","巳"],
            冲: "未",
            L合: "子",
            刑: ["戌","未"],
            破: "辰",
        }
    } else if (input == "寅"){
        details = {
            会: ["卯","辰"],
            S合: ["午","戌"],
            冲: "申",
            L合: "亥",
            刑: ["巳", "申"],
            破: "",
        }
    } else if (input == "卯"){
        details = {
            会: ["寅","辰"],
            S合: ["未","亥"],
            冲: "酉",
            L合: "戌",
            刑: "子",
            破: "午",
        }
    } else if (input == "辰"){
        details = {
            会: ["卯","寅"],
            S合: ["子","申"],
            冲: "戌",
            L合: "酉",
            刑: "辰",
            破: "丑",
        }
    } else if (input == "巳"){
        details = {
            会: ["午","未"],
            S合: ["丑","酉"],
            冲: "亥",
            L合: "申",
            刑: ["寅","申"],
            破: "",
        }
    } else if (input == "午"){
        details = {
            会: ["巳","未"],
            S合: ["寅","戌"],
            冲: "子",
            L合: "未",
            刑: "午",
            破: "卯",
        }
    } else if (input == "未"){
        details = {
            会: ["巳","午"],
            S合: ["亥","卯"],
            冲: "丑",
            L合: "午",
            刑: ["戌","丑"],
            破: "戌",
        }
    } else if (input == "申"){
        details = {
            会: ["酉","戌"],
            S合: ["子","辰"],
            冲: "寅",
            L合: "巳",
            刑: ["寅","巳"],
            破: "",
        } 
    } else if (input == "酉"){
        details = { 
            会: ["申","戌"],
            S合: ["丑","巳"],
            冲: "卯",
            L合: "辰",
            刑: "酉",
            破: "子",
        }
    } else if (input == "戌"){
        details = {
            会: ["申","酉"],
            S合: ["午","寅"],
            冲: "辰",
            L合: "卯",
            刑: ["丑", "未",],
            破: "未",
        }
    } else if (input == "亥"){
        details = {
            会: ["子","丑"],
            S合: ["卯","未"],
            冲: "巳",
            L合: "寅",
            刑: "亥",
            破: "",
        } 
    } else if (input == "甲"){
        details = {
            合: "己",
            冲: "庚",
        } 
    } else if (input == "乙"){
        details = {
            合: "庚",
            冲: "辛",
        } 
    } else if (input == "丙"){
        details = {
            合: "辛",
            冲: "壬",
        } 
    } else if (input == "丁"){
        details = {
            合: "壬",
            冲: "癸",
        } 
    } else if (input == "戊"){
        details = {
            合: "癸",
            冲: "",
        } 
    } else if (input == "己"){
        details = {
            合: "甲",
            冲: "",
        } 
    } else if (input == "庚"){
        details = {
            合: "乙",
            冲: "甲",
        } 
    } else if (input == "辛"){
        details = {
            合: "丙",
            冲: "乙",
        } 
    } else if (input == "壬"){
        details = {
            合: "丁",
            冲: "丙",
        } 
    } else if (input == "癸"){
        details = {
            合: "戊",
            冲: "丁",
        } 
    } 

    return details
}