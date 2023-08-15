import React from 'react';


export class AuthData {
  public access_token:string;
  public expires_in:number;
  public refresh_token:string;
  public refresh_token_expires_in:number;
  public token_type:string;

  constructor(access_token: string="", expires_in: number=0, refresh_token: string="", refresh_token_expires_in: number=0, token_type: string="") {
    this.access_token = access_token;
    this.expires_in = expires_in;
    this.refresh_token = refresh_token;
    this.refresh_token_expires_in = refresh_token_expires_in;
    this.token_type = token_type;
  }
}
