
import BiDirectionalStems from '$lib/CustomClass';


// stemMap.addStem("rat", {
//     sanhe: ["dragon","monkey"],
//     sixchong: "horse",
//     sixhe: "cow",
//     xing: "rabbit",
//     po: "chicken",
//     elem: "6"
// '甲','卯','乙','辰','巽','巳','丙', 
// '午', '丁', '未', '坤', '申', '庚', 
// '酉', "辛", '戌','乾','亥','壬','子','癸','丑','艮','寅'

// });

export async function load() {
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




    stemMap.addStem("卯", {
        sanhui: ["寅","辰"],
        sanhe: ["未","亥"],
        liuchong: "酉",
        liuhe: "戌",
        xing: "子",
        po: "午",
    });

    stemMap.addStem("寅", {
      sanhui: ["卯","辰"],
      sanhe: ["午","戌"],
      liuchong: "申",
      liuhe: "亥",
      xing: ["巳", "申"],
      po: "",
  });
    
  
    return {  
        stemMap
      }
    };


//  "卯":{"冲":"酉", "刑":"子", "被刑":"子", "合":("未","亥"), "会":("寅","辰"), '害':'辰', '破':'午', "六":"戌","暗":"申",},
//  "寅":{"冲":"申", "刑":"巳", "被刑":"申", "合":("午","戌"), "会":("卯","辰"), '害':'巳', '破':'亥', "六":"亥","暗":"丑",},
