export class FileUploadResponse
{
    private _status: string = "";
    private _messages: Message[] = [];
    private _data: any;

    get status():string {return this._status};
    set status(status:string){this.status = status};

    get messages():Message[] {return this._messages};
    set messages(messages:Message[]){this._messages = messages};

    get data():any {return this._data};
    set data(data:any){this._data = data};
}

export class Message
{
    private  _messageCode: string = "";
    private  _messageText: string = "";

    get messageCode():string {return this._messageCode};
    set messageCode(messageCode:string){this._messageCode = messageCode};

    get messageText():string {return this._messageText};
    set messageText(messageText:string){this._messageText = messageText};
}