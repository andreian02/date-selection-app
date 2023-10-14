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
            害: "未"
        }
    } else if (input == "丑"){
        details = { 
            会: ["子","亥"],
            S合: ["酉","巳"],
            冲: "未",
            L合: "子",
            刑2: ["戌","未"],
            破: "辰",
            害: "午"
        }
    } else if (input == "寅"){
        details = {
            会: ["卯","辰"],
            S合: ["午","戌"],
            冲: "申",
            L合: "亥",
            刑2: ["巳", "申"],
            破: "",
            害: "巳"
        }
    } else if (input == "卯"){
        details = {
            会: ["寅","辰"],
            S合: ["未","亥"],
            冲: "酉",
            L合: "戌",
            刑: "子",
            破: "午",
            害: "辰"
        }
    } else if (input == "辰"){
        details = {
            会: ["卯","寅"],
            S合: ["子","申"],
            冲: "戌",
            L合: "酉",
            刑: "辰",
            破: "丑",
            害: "卯"
        }
    } else if (input == "巳"){
        details = {
            会: ["午","未"],
            S合: ["酉","丑"],
            冲: "亥",
            L合: "申",
            刑2: ["寅","申"],
            破: "",
            害: "寅"
        }
    } else if (input == "午"){
        details = {
            会: ["巳","未"],
            S合: ["寅","戌"],
            冲: "子",
            L合: "未",
            刑: "午",
            破: "卯",
            害: "丑"
        }
    } else if (input == "未"){
        details = {
            会: ["巳","午"],
            S合: ["卯","亥"],
            冲: "丑",
            L合: "午",
            刑2: ["戌","丑"],
            破: "戌",
            害: "子"
        }
    } else if (input == "申"){
        details = {
            会: ["酉","戌"],
            S合: ["子","辰"],
            冲: "寅",
            L合: "巳",
            刑2: ["寅","巳"],
            破: "",
            害: "亥"
        } 
    } else if (input == "酉"){
        details = { 
            会: ["申","戌"],
            S合: ["丑","巳"],
            冲: "卯",
            L合: "辰",
            刑: "酉",
            破: "子",
            害: "戌"
        }
    } else if (input == "戌"){
        details = {
            会: ["申","酉"],
            S合: ["午","寅"],
            冲: "辰",
            L合: "卯",
            刑2: ["丑", "未",],
            破: "未",
            害: "酉"
        }
    } else if (input == "亥"){
        details = {
            会: ["子","丑"],
            S合: ["卯","未"],
            冲: "巳",
            L合: "寅",
            刑: "亥",
            破: "",
            害: "申"
        } 
    } else if (input == "甲"){
        details = { 合: "己", 冲: "庚", 根:["寅"] } 
    } else if (input == "乙"){
        details = { 合: "庚", 冲: "辛", 根:["卯"] } 
    } else if (input == "丙"){
        details = { 合: "辛", 冲: "壬", 根:["巳"] } 
    } else if (input == "丁"){
        details = { 合: "壬", 冲: "癸", 根:["午"] } 
    } else if (input == "戊"){
        details = { 合: "癸", 冲: "", 根:["戌","辰"] } 
    } else if (input == "己"){
        details = { 合: "甲", 冲: "", 根:["丑","未"] } 
    } else if (input == "庚"){
        details = { 合: "乙", 冲: "甲", 根:["申"] } 
    } else if (input == "辛"){
        details = { 合: "丙", 冲: "乙", 根:["酉"] } 
    } else if (input == "壬"){
        details = { 合: "丁", 冲: "丙", 根:["亥"] } 
    } else if (input == "癸"){
        details = { 合: "戊", 冲: "丁", 根:["子"] } 
    } 

    return details
}


export function checkElement(input){
  
    let element =  ""
    if (input == "壬" || input == "癸" || input == "亥" || input == "子" || input == "坎") {
      element = "水"
    } else if (input == "甲" || input == "乙" || input == "寅" || input == "卯" || input == "巽" || input == "震") {
      element = "木"
    } else if (input == "丙" || input == "丁" || input == "巳" || input == "午" || input == "离") {
      element = "火"
    } else if (input == "戊" || input == "己" || input == "丑" || input == "辰" || input == "未" || input == "戌" || input == "艮" || input == "坤") {
      element = "土"
    } else if (input == "庚" || input == "辛" || input == "申" || input == "酉" || input == "兑" || input == "乾") {
      element = "金"
    }
      return element
    };
  


    export function elementScore(input){
        let score;
        
        if (input == "子") {
            score = {
                水:1, 木:0, 火:0, 土:0, 金:0
            }
        } else if (input == "丑"){
            score = {
                水:0.25, 木:0, 火:0, 土:0.5, 金:0.25
            }
        } else if (input == "寅"){
            score = {
                水:0, 木:0.5, 火:0.25, 土:0.25, 金:0
            }
        } else if (input == "卯"){
            score = {
                水:0, 木:1, 火:0, 土:0, 金:0
            }
        } else if (input == "辰"){
            score = {
                水:0.25, 木:0.25, 火:0, 土:0.5, 金:0
            }
        } else if (input == "巳"){
            score = {
                水:0, 木:0, 火:0.5, 土:0.25, 金:0.25 
            }
        } else if (input == "午"){
            score = {
                水:0, 木: 0.75, 火: 0.25, 土:0, 金:0
            }
        } else if (input == "未"){
            score = {
                水:0, 木:0.25, 火:0.25, 土:0.5, 金:0 
            }
        } else if (input == "申"){
            score = {
                水:0.25, 木:0, 火:0, 土:0.25, 金:0.5 
            }
        } else if (input == "酉"){
            score = {
                水:0, 木:0, 火:0, 土:0, 金:1
            }
        } else if (input == "戌"){
            score = {
                水:0, 木:0, 火:0.25, 土:0.25, 金:0.5
            }
        } else if (input == "亥"){
            score = {
                水:0.75, 木:0.25, 火:0, 土:0, 金:0
            }
        } else if (input == "甲"){
            score = {
                水: 0, 木: 1, 火: 0, 土: 0, 金: 0
            }
        } else if (input == "乙"){
            score = {
                水: 0, 木: 1, 火: 0, 土: 0, 金: 0
            }
        } else if (input == "丙"){
            score = {
                水: 0, 木: 0, 火: 1, 土: 0, 金: 0
            }
        } else if (input == "丁"){
            score = {
                水: 0, 木: 0, 火: 1, 土: 0, 金: 0
            }
        } else if (input == "戊"){
            score = {
                水: 0, 木: 0, 火: 0, 土: 1, 金: 0  
            }
        } else if (input == "己"){
            score = {
                水: 0, 木: 0, 火: 0, 土: 1, 金: 0 
            }
        } else if (input == "庚"){
            score = {
                水: 0, 木: 0, 火: 0, 土: 0, 金: 1
            }
        } else if (input == "辛"){
            score = {
                水: 0, 木: 0, 火: 0, 土: 0, 金: 1
            }
        } else if (input == "壬"){
            score = {
                水: 1, 木: 0, 火: 0, 土: 0, 金: 0
            }
        } else if (input == "癸"){
            score = {
                水: 1, 木: 0, 火: 0, 土: 0, 金: 0
            }

        }
        return score
    }