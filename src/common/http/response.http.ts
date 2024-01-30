export class CoreApiResponse<TData> {
  public readonly success: boolean;
  public readonly data: TData | null;
  public readonly error: any;
  //Constructor
  private constructor(success: boolean, data?: TData, error?: any) {
    this.success = success;
    this.data = data || null;
    this.error = error;
  }
  //Succes
  public static success<TData>(data: TData): CoreApiResponse<TData> {
    return new CoreApiResponse(true, data, null);
  }

  //error
  public static error<TData>(error?: any): CoreApiResponse<TData> {
    return new CoreApiResponse(false, null, error.message);
  }
}
