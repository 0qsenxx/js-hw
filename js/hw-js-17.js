const musicLibrary = {
  count: 2,
  artists: [
    {
      name: " The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            {
              title: "Witch a Little Help from My Friends",
              duration: "2:44",
            },
            {
              title: "Lucy in the Sky with Diamonds",
              duration: "3:28",
            },
            {
              title: "A Day in the Life",
              duration: "5:33",
            },
          ],
        },
      ],

      title: "Abbey Road",
      year: 1969,
      tracks: [
        {
          title: "Come Together",
          duration: "4:19",
        },
        {
          title: "Something",
          duration: "3:01",
        },
        {
          title: "Here Comes the Sun",
          duration: "3:06",
        },
      ],
    },

    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            {
              title: "Another Brick in the Wall, Part 2",
              duration: "3:59",
            },
            {
              title: "Comfortably Numb",
              duration: "6:23",
            },
            {
              title: "Hey You",
              duration: "14:40",
            },
          ],
        },
      ],
    },

    {
      title: "Dark Side of the Moon",
      year: 1973,
      tracks: [
        {
          title: "Speak to Me/Breathe",
          duration: "3:58",
        },
        {
          title: "Time",
          duration: "7:06",
        },
        {
          title: "Money",
          duration: "6:22",
        },
      ],
    },
  ],
};

const {
  count,
  artists: [
    {
      name,
      albums: [
        {
          title,
          year,
          tracks: [
            { title: title1, duration: duration1 },
            { title: title2, duration: duration2 },
            { title: title3, duration: duration3 },
          ],
        },
      ],
      title: title4,
      year: year1,
      tracks: [
        { title: title5, duration: duration4 },
        { title: title6, duration: duration5 },
        { title: title7, duration: duration6 },
      ],
    },
    {
      name: name1,
      albums: [
        {
          title: title8,
          year: year2,
          tracks: [
            { title: title9, duration: duration7 },
            { title: title10, duration: duration8 },
            { title: title11, duration: duration9 },
          ],
        },
      ],
    },

    {
      title: title12,
      year: year3,
      tracks: [
        { title: title13, duration: duration10 },
        { title: title14, duration: duration11 },
        { title: title15, duration: duration12 },
      ],
    },
  ],
} = musicLibrary;

console.log(count);

console.log(name);
console.log(name1);

console.log(year);
console.log(year1);
console.log(year2);
console.log(year3);

console.log(title);
console.log(title1);
console.log(title2);
console.log(title3);
console.log(title4);
console.log(title5);
console.log(title6);
console.log(title7);
console.log(title8);
console.log(title9);
console.log(title10);
console.log(title11);
console.log(title12);
console.log(title13);
console.log(title14);
console.log(title15);

console.log(duration1);
console.log(duration2);
console.log(duration3);
console.log(duration4);
console.log(duration5);
console.log(duration6);
console.log(duration7);
console.log(duration8);
console.log(duration9);
console.log(duration10);
console.log(duration11);
console.log(duration12);
