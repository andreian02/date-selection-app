
import BiDirectionalStems from '$lib/CustomClass';


export async function load() {

    const refList = [{name:"金", title:["巳", "酉", "丑"],type:"三合"}, 
                     {name:"水", title:["申", "子", "辰"],type:"三合"},
                     {name:"火", title:["寅", "午", "戌"],type:"三合"},
                     {name:"木", title:["亥", "卯", "未"],type:"三合"},

                     {name:"金", title:["申", "酉", "戌"],type:"三会"}, 
                     {name:"水", title:["丑", "子", "亥"],type:"三会"},
                     {name:"火", title:["巳", "午", "未"],type:"三会"},
                     {name:"木", title:["寅", "卯", "辰"],type:"三会"},
                    ]

    const stemMap = new BiDirectionalStems();

    stemMap.addStem("甲", {
      合: "己",
      冲: "庚",
    });
    stemMap.addStem("乙", {
      合: "庚",
      冲: "辛",
    });
    stemMap.addStem("丙", {
      合: "辛",
      冲: "壬",
    });
    stemMap.addStem("丁", {
      合: "壬",
      冲: "癸",
    });
    stemMap.addStem("戊", {
      合: "癸",
      冲: "",
    });
    stemMap.addStem("己", {
      合: "甲",
      冲: "",
    });
    stemMap.addStem("庚", {
      合: "午",
      冲: "子",
    });
    stemMap.addStem("辛", {
      合: "丙",
      冲: "乙",
    });
    stemMap.addStem("壬", {
      合: "丁",
      冲: "丙",
    });
    stemMap.addStem("癸", {
      合: "戊",
      冲: "",
    });

    stemMap.addStem("丑", {
      会: ["子","亥"],
      S合: ["酉","巳"],
      冲: "未",
      L合: "子",
      刑: ["戌","未"],
      破: "辰",
    });

    stemMap.addStem("寅", {
      会: ["卯","辰"],
      S合: ["午","戌"],
      冲: "申",
      L合: "亥",
      刑: ["巳", "申"],
      破: "",
    });

    stemMap.addStem("卯", {
      会: ["寅","辰"],
      S合: ["未","亥"],
      冲: "酉",
      L合: "戌",
      刑: "子",
      破: "午",
    });

    stemMap.addStem("辰", {
      会: ["卯","寅"],
      S合: ["子","申"],
      冲: "戌",
      L合: "酉",
      刑: "辰",
      破: "丑",
    });

    stemMap.addStem("巳", {
      会: ["午","未"],
      S合: ["丑","酉"],
      冲: "亥",
      L合: "申",
      刑: ["寅","申"],
      破: "",
    });

    stemMap.addStem("午", {
      会: ["巳","未"],
      S合: ["寅","戌"],
      冲: "子",
      L合: "未",
      刑: "午",
      破: "卯",
    });

    stemMap.addStem("未", {
      会: ["巳","午"],
      S合: ["亥","卯"],
      冲: "丑",
      L合: "午",
      刑: ["戌","丑"],
      破: "戌",
    });

    stemMap.addStem("申", {
      会: ["酉","戌"],
      S合: ["子","辰"],
      冲: "寅",
      L合: "巳",
      刑: ["寅","巳"],
      破: "",
    });

    stemMap.addStem("酉", {
      会: ["申","戌"],
      S合: ["丑","巳"],
      冲: "卯",
      L合: "辰",
      刑: "酉",
      破: "子",
    });

    stemMap.addStem("戌", {
      会: ["申","酉"],
      S合: ["午","寅"],
      冲: "辰",
      L合: "卯",
      刑: ["丑", "未",],
      破: "未",
    });

    stemMap.addStem("亥", {
      会: ["子","丑"],
      S合: ["卯","未"],
      冲: "巳",
      L合: "寅",
      刑: "亥",
      破: "",
    });
    
  
    return {  
        stemMap,
        refList
      }
    };


