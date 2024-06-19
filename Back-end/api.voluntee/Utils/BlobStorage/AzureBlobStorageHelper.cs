using Azure.Storage.Blobs;

namespace api.voluntee.Utils.BlobStorage
{
    public static class AzureBlobStorageHelper
    {
        public static async Task<string> UploadImageBlobAsync(IFormFile arquivo, string stringConexao, string nomeContainer)
        {
            try
            {
                if (arquivo != null)
                {
                    var blobName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(arquivo.FileName);

                    var blobServiceClient = new BlobServiceClient(stringConexao);

                    var blobContainerClient = blobServiceClient.GetBlobContainerClient(nomeContainer);

                    var blobClient = blobContainerClient.GetBlobClient(blobName);

                    
                    using (var stream = arquivo.OpenReadStream())
                    {
                        await blobClient.UploadAsync(stream, true);
                    }

                    return blobClient.Uri.ToString();
                }
                else
                {

                    return "https://blobvitalhub08.blob.core.windows.net/blobvitalhubcontainer/pfpstandard.png";

                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
