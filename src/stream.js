import fetch from 'node-fetch';
export default async event => {
  // you can use ES7 with async/await and even TypeScript in your functions :)
  
  let rawdata = await fetch('https://up-app1-itzjbhvjqn.now.sh/')

  let ret = await rawdata.text();
  console.log(ret);
  if(ret === '') {
    ret = ["https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8", "http://efg.m3u8"]
  } else {
    ret = ret.split(',')
  }
  return {
    data: {
      message: ret
    }
  }
}